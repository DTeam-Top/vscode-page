import * as vscode from "vscode";
import { MesssageMaping } from "vscode-page";
import * as handlebars from "handlebars";

handlebars.registerHelper("formatDate", function(dateTime) {
  return new Date(dateTime).toLocaleDateString();
});

function loadFromHome() {
  return {
    repositories: [
      {
        name: "repo1",
        options: {
          accessKeyId: "...",
          accessKeySecret: "...",
          bucket: "...",
          region: "..."
        },
        type: "oss"
      },
      {
        name: "repo2",
        options: { accessToken: "...", root: "..." },
        type: "dropbox"
      }
    ],
    extensionInstalled: [
      {
        extId: "dteam.my-ext",
        version: "0.0.1",
        describe: "my-ext",
        enabled: true,
        repository: "repo1"
      }
    ]
  };
}

function listExtensions(repo: string) {
  return [
    {
      extId: "dteam.my-ext",
      currentVersion: "0.0.1",
      icon: "",
      describe: "my-ext",
      dateCreated: "2020-02-28",
      lastUpdate: "2020-02-29"
    },
    {
      extId: "dteam.another-ext",
      currentVersion: "0.0.2",
      icon:
        "data:image/png;base64,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",
      describe: "another-ext",
      dateCreated: "2020-02-28",
      lastUpdate: "2020-02-29"
    }
  ];
}

function showExtension(extId: string, repo: string) {
  const list = listExtensions(repo);
  const extIndex = list.map(i => i.extId).indexOf(extId);
  if( extId === 'dteam.my-ext') {
    return {
      metadata: list[extIndex],
      readme:
        "# my-ext README\n\nThis is My ext. And its version is 0.0.1\n",
      changelog:
        '# My-Ext Change Log\n\n## 0.0.1\n\nAll notable changes to the "my-ext" extension will be documented in this file.\n\nCheck [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.\n\n## [Unreleased]\n\n- Initial release'
    }
  } else if( extId === 'dteam.another-ext') {
    return {
      metadata: list[extIndex],
      readme:
        "# another-ext README\n\nThis is another ext. And its version is 0.0.2\n",
      changelog:
        '# Another-Ext Change Log\n\n## 0.0.2\n\nHere we are.\n\n## 0.0.1\n\nAll notable changes to the "another-ext" extension will be documented in this file.\n\nCheck [Keep a Changelog](http://keepachangelog.com/) for recommendations on how to structure this file.\n\n## [Unreleased]\n\n- Initial release'
    };
  }
  return {};
}

export const messageMappings: MesssageMaping[] = [
  {
    command: "ready",
    handler: async () => {
      let result = loadFromHome();
      return {
        repositories: result.repositories,
        extensionInstalled: result.extensionInstalled,
        title: "Installed Extensions"
      };
    },
    templates: [
      {
        id: "repos",
        content: `
        {{#each repositories}}
          <li>
            <a class="bd-toc-link" onclick="listExtensions('{{name}}')" href="#">
              <img src="shared/imgs/logo/{{type}}.png" class="repos_logo">{{name}}
            </a>
          </li>
        {{/each}}
        `
      },
      { id: "title", content: "{{title}}" },
      {
        id: "content",
        contentUrl: "pages/list_intalled.hb"
      }
    ]
  },
  {
    command: "listExtensions",
    handler: async parameters => {
      let result = await listExtensions(parameters.repo);
      let installedExtIds = (await loadFromHome()).extensionInstalled.map(
        extension => extension.extId
      );
      let finalResult = new Array();
      result.forEach(extensionMetadata => {
        finalResult.push({
          extension: extensionMetadata,
          installed: installedExtIds.some(id => id === extensionMetadata.extId)
        });
      });

      return {
        title: parameters.repo,
        extensions: finalResult
      };
    },
    templates: [
      { id: "title", content: "{{title}}" },
      {
        id: "content",
        contentUrl: "pages/list_extension.hb"
      }
    ]
  },
  {
    command: "showExtension",
    handler: async parameters => {
      let result = await showExtension(parameters.extId, parameters.repo);
      let readMe = (await vscode.commands.executeCommand(
        "markdown.api.render",
        result.readme
      )) as string;
      let changelog = (await vscode.commands.executeCommand(
        "markdown.api.render",
        result.changelog
      )) as string;
      return {
        title: `${parameters.repo} / ${parameters.extId}`,
        repo: parameters.repo,
        details: result,
        readMe: readMe,
        changelog: changelog,
        installed: parameters.installed
      };
    },
    templates: [
      { id: "title", content: "{{title}}" },
      {
        id: "content",
        contentUrl: "pages/detail_extension.hb"
      }
    ]
  },
  {
    command: "installExtension",
    handler: async parameters => {}
  },
  {
    command: "loadRepositories",
    handler: async () => {
      let result = await loadFromHome();
      let example = [
        {
          name: "repo1",
          type: "oss",
          options: {
            accessKeyId: "...",
            accessKeySecret: "...",
            bucket: "...",
            region: "..."
          }
        },
        {
          name: "repo2",
          type: "dropbox",
          options: {
            password: "...",
            user: "..."
          }
        }
      ];
      return {
        repositories: JSON.stringify(result.repositories, undefined, 4),
        title: "Repositories Setting",
        example: JSON.stringify(example, undefined, 2)
      };
    },
    templates: [
      { id: "title", content: "{{title}}" },
      {
        id: "content",
        contentUrl: "pages/setting.hb"
      }
    ]
  },
  {
    command: "submitRepositories",
    handler: async parameters => {
      vscode.window.showInformationMessage("Repositories setting is updated.");
    },
    forward: "ready"
  },
  {
    command: "openExtension",
    handler: async parameters => {
      vscode.commands.executeCommand("extension.open", parameters.extId);
    }
  }
];
