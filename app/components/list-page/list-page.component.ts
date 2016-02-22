import {Component, Input} from "angular2/core";
import {BarListComponent} from "../bar-list.component"
import {PageManager, PAGE} from "../../services/page-manager.service";

@Component({
  selector: "ListPage",
  directives: [BarListComponent],
  template: `
<ScrollView>
  <BarList></BarList>
</ScrollView>
<AbsoluteLayout row="1" cssClass="fabContainer" >
  <Image src="res://fab_add" (tap)="addBar()" cssClass="fab" ></Image>
</AbsoluteLayout>
`
})
export class ListPage {

  constructor(private pageManager: PageManager) {

  }

  addBar() {
    this.pageManager.goTo(PAGE.addBar);
  }
}