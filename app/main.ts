// this import should be first in order to load some required settings (like globals and reflect-metadata)
import {nativeScriptBootstrap} from "nativescript-angular/application";
import {AppComponent} from "./app.component";
import {LocationService} from "./services/location.service";
import {BarsService} from "./services/bars.service";
import {PageManager} from "./services/page-manager.service";
import {HappyHourApi} from "./services/happy-hour-api.service";

nativeScriptBootstrap(AppComponent, [LocationService, BarsService, PageManager, HappyHourApi]);