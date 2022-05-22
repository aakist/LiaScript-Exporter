import * as helper from './helper'

const path = require('path')
const fs = require('fs-extra')
const { exec } = require('child_process')

export async function exporter(
  argument: {
    input: string
    readme: string
    output: string
    format: string
    path: string
    key?: string

    'android-sdk'?: string
    'android-appId'?: string
    'android-appName'?: string
    'android-icon'?: string
    'android-splash'?: string
    'android-splashDuration'?: number
    'android-preview'?: boolean
  },
  json: any
) {
  // make temp folder
  let tmp = await helper.tmpDir()

  let tmpPath = path.join(tmp, 'pro')

  // copy assets to temp/dist
  await fs.copy(
    path.join(__dirname, './assets/capacitor'),
    path.join(tmpPath, './dist')
  )

  // copy logo and splash
  await fs.copy(
    path.join(__dirname, './resources'),
    path.join(tmpPath, '../resources')
  )

  if (argument['android-preview']) {
    // create a link, this way, the app can be updated interactively
    await fs.symlink(
      path.resolve(argument.path),
      path.join(tmpPath, './dist/res'),
      'dir'
    )
  } else {
    // copy base path or readme-directory into temp
    await fs.copy(
      path.resolve(argument.path),
      path.join(tmpPath, './dist/res'),
      {
        filter: helper.filterHidden,
      }
    )
  }

  await helper.writeFile(
    path.join(tmpPath, '../capacitor.config.json'),
    `{
      "appId": "${argument['android-appId']}",
      "appName": "${argument['android-appName'] || json.lia.str_title}",
      "bundledWebRuntime": true,
      "webDir": "pro/dist",
      "linuxAndroidStudioPath": "${argument['android-sdk']}",
      "windowsAndroidStudioPath": "${argument['android-sdk']}",
      "plugins": {
        "SplashScreen": {
          "launchShowDuration": ${argument['android-splashDuration'] || 0}
        }
      }
    }`
  )

  await helper.writeFile(
    path.join(tmpPath, '../package.json'),
    `{
    "scripts": {
      "build": "npx cap add android"
    },
    "dependencies": {
      "@capacitor-community/text-to-speech": "^1.1.3",
      "@capacitor/android": "^3.5.1",
      "@capacitor/cli": "^3.5.1",
      "capacitor-resources": "^2.0.5"
    },
    "engines": {
      "node": ">= 12"
    }
  }`
  )

  let index = fs.readFileSync(path.join(tmpPath, 'dist/index.html'), 'utf8')

  index = helper.inject(
    `<script> if (!window.LIA) { window.LIA = {} } window.LIA.defaultCourseURL = "./res/${path.basename(
      argument.readme
    )}"</script>`,
    index
  )

  try {
    await helper.writeFile(path.join(tmpPath, 'dist/index.html'), index)
  } catch (e) {
    console.warn(e)
    return
  }

  execute(
    [
      'npm i',
      'npm update',
      'npx cap add android',
      `npx capacitor-resources -p "android" ${
        argument['android-icon']
          ? '--icon ' + path.resolve(argument['android-icon'])
          : ''
      } ${
        argument['android-splash']
          ? '--splash ' + path.resolve(argument['android-splash'])
          : ''
      }`,
    ],
    path.join(tmpPath, '..'),
    async function () {
      await sdk(tmpPath, argument['android-sdk'])

      if (argument['android-preview']) {
        execute(
          ['npx cap open android'],
          path.join(tmpPath, '..'),

          () => {
            console.log('ready')
          }
        )
      } else {
        execute(
          ['./gradlew assembleDebug'],
          path.join(tmpPath, '../android'),
          function () {
            console.warn('DONE')
            fs.copy(
              path.join(
                tmpPath,
                '../android/app/build/outputs/apk/debug/app-debug.apk'
              ),
              argument.output + '.apk'
            )
          }
        )
      }
    }
  )
}

async function sdk(tmpPath: string, uri?: string) {
  if (!uri) return

  try {
    helper.writeFile(
      path.join(tmpPath, '../android/local.properties'),
      `sdk.dir=${uri}`
    )
  } catch (e) {
    console.warn(e)
    return
  }
}

function execute(cmds: string[], cwd: string, callback) {
  const cmd = cmds.shift()

  if (cmd) {
    console.log('exec:', cmd)
    exec(cmd, { cwd: cwd }, async (error, stdout, stderr) => {
      if (error) {
        console.warn(`error: ${error.message}`)
      }
      if (stderr) {
        console.warn(`stderr: ${stderr}`)
      }
      console.log(`stdout: ${stdout}`)

      execute(cmds, cwd, callback)
    })
  } else {
    callback()
  }
}
