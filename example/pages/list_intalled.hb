<table class="table">
  <thead class="thead-light">
    <tr>
      <th scope="col">Id</th>
      <th scope="col">Version</th>
      <th scope="col">Description</th>
      <th scope="col">Enabled</th>
      <th scopt="col">Repository</th>
    </tr>
  </thead>
  <tbody>
    {{#each extensionInstalled}}
    <tr>
      <td scope="row">{{extId}}</td>
      <td>{{version}}</td>
      <td>{{describe}}</td>
      <td>
        {{#if enabled}} √ {{else}} X {{/if}}
      </td>
      <td>{{repository}}</td>
    </tr>
    {{/each}}
  </tbody>
</table>
