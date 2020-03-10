<div class="container">
  <div class="row">
    <div class="col-4 setting-container example-div">
    Setting is a json array, and each item has following properties:
    <ul>
      <li>name, repository name</li>
      <li>type, one of ["oss", "s3", "github", "gitlab", "google-driver", "dropbox", "npm"]</li>
      <li>options, authentication options of each repository type, please check its document for more details.</li>
    </ul>
    <div>
      Here is an example:
      <pre>{{example}}
      </pre>
      </div>
    </div>
    <div class="col-8 setting-container ">
      <textarea id="setting-textarea">{{repositories}}</textarea>
    </div>
    <div class="col-12 text-right button-div">
    <button type="button" class="btn btn-secondary btn-sm" onclick="cancelSetting()">Cancel</button>
    <button type="button" class="btn btn-primary btn-sm" onclick="submitRepositories()">Submit</button>
  </div>
  </div>
</div>