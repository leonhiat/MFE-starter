/// <reference path="../../typings/_custom.d.ts" />

// Angular 2
import {Component, View} from 'angular2/angular2';
import {CORE_DIRECTIVES, FORM_DIRECTIVES} from 'angular2/angular2';

import {AcAutosuggestGithub} from '../directives/ac-autosuggest';

@Component({
  selector: 'search-github'
})
@View({
  directives: [ CORE_DIRECTIVES, FORM_DIRECTIVES, AcAutosuggestGithub ],
  template: `
  <div style="padding: 0 16px;">
    <h2>Search Github repos</h2>

    <section>

      <input
        ac-autosuggest-github
        (results)="repos = $event"
        (loading)="loading = $event"
        type="text"
        autofocus>
      <img
        style="width: 20px;position: absolute;"
        [hidden]="!loading"
        src="https://www.brown.edu/sites/default/themes/pawtuxet/img/loader-larger.gif">
    </section>

    <section>

      <div *ng-for="#repo of repos" style="padding: 0.5em 0.5em 0.5em 0;">
        <a [href]="repo.html_url" target="_blank">
          {{ repo.owner.login }}/<b>{{ repo.name }}</b>
        </a>
      </div>

    </section>
  </div>
  `
})
export class SearchGithub {
  repos: Array<any> = [];
  loading: boolean = false;

  constructor() {

  }
}
