{{#each extensions}}
  <div class="row vertical-align extension-item" >
      <div class="col-1 text-center">
          {{#if extension.icon}}
            <img src="{{extension.icon}}" width="48px">
          {{else}}
            <img src="shared/imgs/extention.png" width="48px">
          {{/if}}
      </div>
      <div class="col-9 no-padding">
        <div class="container">
          <div class="row">
            <div class="col-12 list-title">
              {{extension.extId}}
              <span class="version">{{extension.currentVersion}}</span>
            </div>
            <div class="col-12">
              {{extension.describe}}
            </div>
            <div class="col-12">
              Created:{{formatDate extension.dateCreated}}&nbsp;&nbsp;&nbsp;&nbsp;Last Update:{{formatDate extension.lastUpdate}}
            </div>
          </div>
        </div>
      </div>
      <div class="col-2">
        <button type="button" class="btn btn-success btn-sm" onclick="showExtension('{{../title}}','{{extension.extId}}',{{installed}})">Show Me</button>
      </div>
  </div>
{{/each}}