import {Component, OnInit} from "angular2/core";
import {BarComponent} from "./bar.component";
import {BarsService} from "../services/bars.service";
import {Bar} from "../model/model";
import {OrderBy} from "../pipes/order-by.pipe";

@Component({
  selector: "BarList",
  directives: [BarComponent],
  providers: [BarsService],
  pipes: [OrderBy],
  template: `
<StackLayout orientation="vertical">
  <Bar class="bar-item" *ngFor="#bar of bars | orderBy:'distance':false" [bar]="bar"></Bar>
</StackLayout>
`,

})

export class BarListComponent /*implements OnInit */{
  public bars: Bar[];
  constructor(private barsService: BarsService) {
    this.getBars();  //FIXME: I can't seem to move it to ngOnInit
    //this.bars = [];
  }

  //ngOnInit() {
  //  this.getBars();
  //}

  getBars() {
    this.barsService.getBars().then(bars => {
      this.bars = bars;
    });
  }
}