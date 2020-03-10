import * as vscode from "vscode";
import { createOrShowPage } from "vscode-page";
import { messageMappings } from "./home";

export function activate(context: vscode.ExtensionContext) {
  registerCommands(context);
}

export function deactivate() {}

function registerCommands(context: vscode.ExtensionContext) {
  let homePage = vscode.commands.registerCommand("ext.home", async () => {
    createOrShowPage(
      "name",
      "ext.home",
      "Sample Page",
      "pages",
      "home.html",
      context,
      messageMappings
    );
  });

  context.subscriptions.push(homePage);
}
