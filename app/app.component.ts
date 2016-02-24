import {Component} from "angular2/core";
import {ListPage} from "./components/list-page/list-page.component"
import {PageManager, PAGE} from "./services/page-manager.service";
import {AddBarPage} from "./components/add-bar/add-bar.page.component";
import {EditBarPage} from "./components/edit-bar-page/edit-bar-page.component";
import {BarsMapPage} from "./components/bars-map-page/bars-map-page.component";

@Component({
  selector: "my-app",
  directives: [ListPage, AddBarPage, EditBarPage, BarsMapPage],
  template: `
<GridLayout rows="*" [ngSwitch]="pageManager.getCurrent()">
  <AddBarPage *ngSwitchWhen="pages.addBar"></AddBarPage>
  <EditBarPage *ngSwitchWhen="pages.editBar" [bar]="pageManager.getState().bar"></EditBarPage>
  <BarsMapPage *ngSwitchWhen="pages.barsMap"></BarsMapPage>
  <ListPage *ngSwitchDefault></ListPage>
</GridLayout>
`
})
export class AppComponent {
  public pages = PAGE;

  constructor(public pageManager: PageManager) {
  }
}