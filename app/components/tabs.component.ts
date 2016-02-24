import {Component, Input} from "angular2/core";
import {PageManager, PAGE} from "../services/page-manager.service";
var mapbox = require("nativescript-mapbox");

@Component({
  selector: "Tabs",
  providers: [],
  pipes: [],
  template: `
<GridLayout rows="60, *">
  <GridLayout row="0", columns="auto, auto",>
    <Button text="List" col="0" (tap)="goToList()"></Button>
    <Button text="Map" col="1" (tap)="pageManager.goTo(pages.barsMap)"></Button>
  <GridLayout columns="auto, auto", rows="100, *">
</GridLayout>
`
})
export class Tabs {
  public pages = PAGE;
  constructor(private pageManager: PageManager) {
  }

  goToList() {
    mapbox.hide();
    this.pageManager.goTo(this.pages.list);
  }
}