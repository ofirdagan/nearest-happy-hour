import {Component, Input} from "angular2/core";
import {Bar} from "../model/model"

@Component({
  selector: "Bar",
  template: `
  <StackLayout orientation="vertical">
    <Label [text]="bar.name"></Label>
  </StackLayout>
`,

})
export class BarComponent {
  @Input() bar: Bar;
}