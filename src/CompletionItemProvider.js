const vscode = require('vscode')

class SoilCompletionItemProvider {

  provideCompletionItems(document, position, token) {
    const completionItems = [
      {
        label: 'entity',
        kind: vscode.CompletionItemKind.Keyword
      },
      {
        label: 'reference',
        kind: vscode.CompletionItemKind.Keyword
      },
      {
        label: 'mutable',
        kind: vscode.CompletionItemKind.Keyword
      },
      {
        label: 'identifier',
        kind: vscode.CompletionItemKind.Keyword
      },
      {
        label: 'field',
        kind: vscode.CompletionItemKind.Keyword
      }
    ]
    let completionList = new vscode.CompletionList(completionItems, false)
    return Promise.resolve(completionList)
  }
}

module.exports = SoilCompletionItemProvider