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
  <ListPage *ngSwitchWhen="pages.list"></ListPage>
  <AddBarPage *ngSwitchWhen="pages.addBar"></AddBarPage>
  <EditBarPage *ngSwitchWhen="pages.editBar" [bar]="pageManager.getState().bar"></EditBarPage>
  <BarsMapPage *ngSwitchWhen="pages.barsMap"></BarsMapPage>
</GridLayout>
`
})
export class AppComponent {
  public pages = PAGE;

  constructor(public pageManager: PageManager) {
  }

  ngOnInit() {
  }

  //mockEditBar() {
  //  setTimeout(() => {
  //    let bar = {
  //      "id": "1",
  //      "name": "HaNevihim",
  //      "imageUrl": "https://fbcdn-profile-a.akamaihd.net/hprofile-ak-xpf1/v/t1.0-1/p320x320/10978579_10153597627499167_7655655462103556409_n.jpg?oh=83de21a20a459d95f2d23d6bb50ec0df&oe=576D3EFE&__gda__=1465715334_18ff22e44987e5fab3161875087270fb",
  //      "location": {"latitude": 32.095035, "longitude": 34.778269},
  //      "rating": 4
  //    };
  //    this.pageManager.goTo(PAGE.editBar, {bar: bar});
  //  }, 100);
  //}
}