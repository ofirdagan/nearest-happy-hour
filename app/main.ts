// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";
import {LocationService} from "./services/location.service";
import {BarsService} from "./services/bars.service";

nativeScriptBootstrap(AppComponent, [LocationService, BarsService]);