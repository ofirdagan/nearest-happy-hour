import {Component} from "angular2/core";
import {BarListComponent} from "./components/bar-list.component"

@Component({
  selector: "my-app",
  directives: [BarListComponent],
  template: `
<StackLayout orientation="vertical">
  <Label [text]="message" class="title" (tap)="message = 'OHAI'"></Label>
  <ScrollView>
    <BarList></BarList>
  </ScrollView>
</StackLayout>
`
})
export class AppComponent {
  public message: string = "This is a voodoo shit.. can't get rid of label";
}