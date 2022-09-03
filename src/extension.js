const vscode = require('vscode')
const path = require('node:path')
const {
	LanguageClient,
  TransportKind,
} = require('vscode-languageclient/node')

const SOIL_MODE = { scheme: 'file', language: 'soil' };

let client

const activate = async function (context) {

  console.log('activate:', context)

  const serverModule = context.asAbsolutePath(path.join('node_modules', 'soil-schema', 'src', 'lsp.js'))
  const serverOptions = {
    run: { module: serverModule, transport: TransportKind.stdio },
    debug: { module: serverModule, transport: TransportKind.stdio },
  }
  const clientOptions = {
    documentSelector: [SOIL_MODE],
    stdioEncoding: 'utf8',
  }

  console.log('serverModule:', serverModule)

  client = new LanguageClient(
    'soilLSP',
    'Soil Language Server Client',
    serverOptions,
    clientOptions,
    true,
  )

  try {
    await client.start()
  } catch (error) {
    console.error(error)
  }
}

const deactivate = function () {
  console.log('deactivate:', client)
  if (client) client.stop()
}

module.exports = { activate, deactivate }