import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {

	context.subscriptions.push(
		vscode.commands.registerCommand('extension.text2Json', () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const document = editor.document;
				const selection = editor.selection;
				if (selection){
					const text = document.getText(selection);
					const jsonText = JSON.stringify(text);

					editor.edit(editBuilder => {
						editBuilder.replace(selection, jsonText);
					});
				}
			}
		})
	);


	context.subscriptions.push( 
		vscode.commands.registerCommand('extension.json2Text', () => {
			const editor = vscode.window.activeTextEditor;
			if (editor) {
				const document = editor.document;
				const selection = editor.selection;
				if (selection){
					const jsonText = document.getText(selection);
					const text = JSON.parse(jsonText);

					editor.edit(editBuilder => {
						editBuilder.replace(selection, text);
					});
				}
			}
		})
	);

}

export function deactivate() {}
