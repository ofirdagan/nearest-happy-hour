import {Component, Input} from "angular2/core";
import {BarListComponent} from "../bar-list.component"
import {Tabs} from "../tabs.component"
import {PageManager, PAGE} from "../../services/page-manager.service";
@Component({
  selector: "ListPage",
  directives: [BarListComponent, Tabs],
  template: `
<GridLayout rows="auto, *">
  <Tabs row="0"></Tabs>
  <ScrollView row="1">
    <BarList></BarList>
  </ScrollView>
  <AbsoluteLayout row="1" cssClass="fabContainer" >
    <Image src="res://fab_add" (tap)="addBar()" cssClass="fab" ></Image>
  </AbsoluteLayout>
</GridLayout>
`
})
export class ListPage {

  constructor(private pageManager: PageManager) {

  }

  addBar() {
    this.pageManager.goTo(PAGE.addBar);
  }
}