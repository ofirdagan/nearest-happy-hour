import {Component} from "angular2/core";
import {ListPage} from "./components/list-page/list-page.component"
import {PageManager, PAGE} from "./services/page-manager.service";
import {AddBarPage} from "./components/add-bar/add-bar.page.component";
import {EditBarPage} from "./components/edit-bar-page/edit-bar-page.component";

@Component({
  selector: "my-app",
  directives: [ListPage, AddBarPage, EditBarPage],
  template: `
<GridLayout rows="*">
  <ListPage *ngIf="pageManager.getCurrent() === pages.list"></ListPage>
  <AddBarPage *ngIf="pageManager.getCurrent() === pages.addBar"></AddBarPage>
  <EditBarPage *ngIf="pageManager.getCurrent() === pages.editBar"></EditBarPage>
</GridLayout>
`
})
export class AppComponent {
  public pages = PAGE;

  constructor(public pageManager: PageManager) {
  }
}