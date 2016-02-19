import {Component, OnInit} from "angular2/core";
import {BarComponent} from "./bar.component";
import {BarsService} from "../services/bars.service";
import {Bar} from "../model/model";

@Component({
  selector: "BarList",
  directives: [BarComponent],
  providers: [BarsService],
  template: `
  <StackLayout orientation="vertical">
    <Bar *ngFor="#bar of bars" [bar]="bar"></Bar>
  </StackLayout>
`,

})

export class BarListComponent /*implements OnInit */{
  public bars: Bar[];

  constructor(private barsService: BarsService) {
    this.getBars();
  }

/*
  ngOnInit() {
    this.getBars();
  }
*/
  getBars() {
    this.barsService.getBars().then(bars => this.bars = bars);
  }
}