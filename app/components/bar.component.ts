import {Component, Input} from "angular2/core";
import {Bar} from "../model/model"
import {LocationService} from "../services/location.service"
import {DistanceRendererPipe} from "../pipes/distance-renderer.pipe";

@Component({
  selector: "Bar",
  providers: [LocationService],
  pipes: [DistanceRendererPipe],
  template: `
<GridLayout columns="auto, *, auto" rows="auto" cssClass="bar-item">
    <Image col="0" [src]="bar.imageUrl" class="bar-icon"></Image>
    <Label col="1" [text]="bar.name" class="bar-title"></Label>
    <Label col="2" [text]="bar.distance | distanceRenderer"></Label>
</GridLayout>
`
})
export class BarComponent{
  @Input() bar: Bar;
}