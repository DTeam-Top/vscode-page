<div class="row vertical-align" >
  <div class="col-2 no-padding text-center">
      {{#if details.metadata.icon}}
        <img src="{{details.metadata.icon}}" width="110px">
      {{else}}
        <img src="shared/imgs/extention.png" width="110px">
      {{/if}}
  </div>
  <div class="col-9 no-padding">
    <div class="container">
      <div class="row">
        <div class="col-12 extention-title">
          {{details.metadata.extId}}
          <span class="version">{{details.metadata.currentVersion}}</span>
        </div>
        <div class="col-12">
          {{details.metadata.describe}}
        </div>
        <div class="col-12">
          Created:{{formatDate details.metadata.dateCreated}}&nbsp;&nbsp;&nbsp;&nbsp; Last Update:{{formatDate details.metadata.lastUpdate}}
        </div>
        <div class="col-2">
          {{#unless installed}}
            <button type="button" class="btn btn-success btn-sm" onclick="installExtension('{{repo}}','{{details.metadata.extId}}')">Install</button>
          {{/unless}}
        </div>
      </div>
    </div>
  </div>
  <div class="col-12">
    <nav>
      <div class="nav nav-tabs" id="nav-tab" role="tablist">
        <a class="nav-item nav-link active" id="nav-readme-tab" data-toggle="tab" href="#nav-readme" role="tab" aria-controls="nav-readme" aria-selected="true">Details</a>
        <a class="nav-item nav-link" id="nav-changelog" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Changelog</a>
      </div>
    </nav>
    <hr>
  </div>
</div>
<div class="tab-content" id="nav-tabContent">
<div id="contain"></div>
<div class="tab-pane fade show active" id="nav-readme" role="tabpanel" aria-labelledby="nav-readme-tab">{{{readMe}}}</div>
<div class="tab-pane fade changelog-sticky" id="nav-profile" role="tabpanel" aria-labelledby="nav-changelog">{{{changelog}}}</div>
</div>
<a id="scroll-to-top" role="button" aria-label="scroll to top" href="#contain"><span class="icon"></span></a>