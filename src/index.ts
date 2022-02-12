// @ts-ignore
import { Elm } from '../LiaScript/src/elm/Worker.elm'

import { web } from './export/web'
import { scorm1_2 } from './export/scorm12'
import { scorm2004 } from './export/scorm2004'
import { pdf } from './export/pdf'
import { isURL } from './export/helper'

global.XMLHttpRequest = require('xhr2')

const path = require('path')
const fs = require('fs-extra')
const argv = require('minimist')(process.argv.slice(2))

// -------------------------------Main Execution-------------------------------
if (argv.v || argv.version) {
  console.log('version: 1.0.51--0.9.51')
} else if (argv.h || argv.help) {
  help()
} else if (argv.i || argv.input) {
  run(parseArguments())
} else {
  console.warn('No input defined')
  help()
}
// ----------------------------------------------------------------------------

function run(argument) {
  var app = Elm.Worker.init({ flags: { cmd: '' } })
  app.ports.output.subscribe(function (event) {
    let [ok, string] = event

    // the worker did not succeed
    if (!ok) {
      console.warn(string)
      return
    }

    switch (argument.format) {
      case 'json':
      case 'fulljson': {
        fs.writeFile(argument.output + '.json', string, function (err) {
          if (err) console.error(err)
        })
        break
      }
      case 'scorm1.2': {
        scorm1_2(argument, JSON.parse(string))
        break
      }
      case 'scorm2004': {
        scorm2004(argument, JSON.parse(string))
        break
      }
      case 'web': {
        web(argument, JSON.parse(string))
        break
      }
      case 'pdf': {
        pdf(argument, JSON.parse(string))
        break
      }
      default: {
        console.warn('unknown output format', argument.format)
      }
    }
  })

  try {
    // the format is changed only locally, the SCORM and web exporters simply
    // require some meta data from the parsed json output
    const format =
      argument.format == 'scorm1.2' ||
      argument.format == 'scorm2004' ||
      argument.format == 'pdf' ||
      argument.format == 'web'
        ? 'fulljson'
        : argument.format

    if (!isURL(argument.input)) {
      const data = fs.readFileSync(argument.input, 'utf8')
      app.ports.input.send([format, data])
    } else if (argument.format === 'pdf') {
      pdf(argument, {})
    } else {
      console.warn('URLs are not allowed as input')
    }
  } catch (err) {
    console.error(err)
  }
}

function help() {
  console.log('LiaScript-Exporter')
  console.log('')
  console.log('-h', '--help', '           show this help')
  console.log('-i', '--input', '          file to be used as input')
  console.log(
    '-p',
    '--path',
    '           path to be packed, if not set, the path of the input file is used'
  )
  console.log(
    '-o',
    '--output',
    '         output file name (default is output), the ending is define by the format'
  )
  console.log(
    '-f',
    '--format',
    '         scorm1.2, scorm2004, json, fullJson, web, pdf (default is json)'
  )
  console.log('-v', '--version', '        output the current version')

  console.log('\n-k', '--key', '            responsive voice key ')

  console.log('\nSCORM 1.2 settings:')
  console.log('')
  console.log('--organization', '         set the organization title')
  console.log(
    '--masteryScore',
    '         set the scorm masteryScore (a value between 0 -- 100), default is 0'
  )
  console.log(
    '--typicalDuration',
    '      set the scorm duration, default is PT0H5M0S'
  )

  console.log('\nPDF settings:\n')
  console.log(
    'https://github.com/puppeteer/puppeteer/blob/main/docs/api.md#pagepdfoptions\n'
  )
  console.log(
    '--pdf-preview               Open preview-browser (default false), print not possible'
  )
  console.log(
    '--pdf-scale                 Scale of the webpage rendering. Defaults to 1. Scale amount must be between 0.1 and 2.'
  )
  console.log(
    '--pdf-displayHeaderFooter   Display header and footer. Defaults to false.'
  )
  console.log(
    '--pdf-headerTemplate-date   HTML template for the print header - formatted print date'
  )
  console.log(
    '--pdf-headerTemplate-title  HTML template for the print header - document title'
  )
  console.log(
    '--pdf-headerTemplate-url    HTML template for the print header - document location'
  )
  console.log(
    '--pdf-headerTemplate-pageNumber   HTML template for the print header - current page number'
  )
  console.log(
    '--pdf-headerTemplate-totalPages   HTML template for the print header - total pages in the document'
  )
  console.log(
    '--pdf-footerTemplate        HTML template for the print footer. Should use the same format as the headerTemplate'
  )
  console.log(
    '--pdf-printBackground       Print background graphics. Defaults to false'
  )
  console.log(
    '--pdf-landscape             Paper orientation. Defaults to false.'
  )
  console.log(
    '--pdf-pageRanges            Paper ranges to print, e.g., "1-5, 8, 11-13"'
  )
  console.log(
    '--pdf-format                Paper format. If set, takes priority over width or height options. Defaults to a4.'
  )
  console.log(
    '--pdf-width                 Paper width, accepts values labeled with units.'
  )
  console.log(
    '--pdf-height                Paper height, accepts values labeled with units.'
  )
  console.log(
    '--pdf-margin-top            Top margin, accepts values labeled with units.'
  )
  console.log(
    '--pdf-margin-right          Right margin, accepts values labeled with units.'
  )
  console.log(
    '--pdf-margin-bottom         Bottom margin, accepts values labeled with units.'
  )
  console.log(
    '--pdf-margin-left           Left margin, accepts values labeled with units. '
  )
  console.log(
    '--pdf-preferCSSPageSize     Give any CSS @page size declared in the page priority over what is declared in width and height or format options. Defaults to false, which will scale the content to fit the paper size. '
  )
  console.log(
    '--pdf-omitBackground       Hides default white background and allows capturing screenshots with transparency. Defaults to true. '
  )

  console.log(
    '--pdf-timeout               Set an additional time horizon to wait until finished.'
  )

  console.log(
    '--pdf-stylesheet            Inject an local CSS for changing the appearance.'
  )
}

function parseArguments() {
  const argument = {
    input: argv.i || argv.input,
    readme: argv.i || argv.input,
    output: argv.o || argv.output || 'output',
    format: argv.f || argv.format || 'json',
    path: argv.p || argv.path,
    key: argv.k || argv.key,

    // special cases for SCORM
    organization: argv.organization,
    masteryScore: argv.masteryScore,
    typicalDuration: argv.typicalDuration,

    // pdf cases
    'pdf-preview': argv['pdf-preview'],
    'pdf-scale': argv['pdf-scale'],
    'pdf-displayHeaderFooter': argv['pdf-displayHeaderFooter'],
    'pdf-headerTemplate-date': argv['pdf-headerTemplate-date'],
    'pdf-headerTemplate-title': argv['pdf-headerTemplate-title'],
    'pdf-headerTemplate-url': argv['pdf-headerTemplate-url'],
    'pdf-headerTemplate-pageNumber': argv['pdf-headerTemplate-pageNumber'],
    'pdf-headerTemplate-totalPages': argv['pdf-headerTemplate-totalPages'],
    'pdf-footerTemplate': argv['pdf-footerTemplate'],
    'pdf-printBackground': argv['pdf-printBackground'],
    'pdf-landscape': argv['pdf-landscape'],
    'pdf-format': argv['pdf-format'],
    'pdf-width': argv['pdf-width'],
    'pdf-height': argv['pdf-height'],
    'pdf-margin-top': argv['pdf-margin-top'],
    'pdf-margin-bottom': argv['pdf-margin-bottom'],
    'pdf-margin-right': argv['pdf-margin-right'],
    'pdf-margin-left': argv['pdf-margin-left'],
    'pdf-preferCSSPageSize': argv['pdf-preferCSSPageSize'],
    'pdf-omitBackground': argv['pdf-omitBackground'],
    'pdf-timeout': argv['pdf-timeout'],

    'pdf-stylesheet': argv['pdf-stylesheet'],
  }

  argument.format = argument.format.toLowerCase()

  if (!argument.path && !isURL(argument.input)) {
    argument.path = path.dirname(argument.input)
    argument.readme = path.basename(argument.input)
  }

  return argument
}
