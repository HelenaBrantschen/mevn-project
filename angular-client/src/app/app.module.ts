import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {GalleryComponent} from "./components/gallery/gallery.component";
import {HttpClientModule} from "@angular/common/http";
import { RoundbtnComponent } from './components/roundbtn/roundbtn.component';
import { MapComponent } from './components/map/map.component';
import { BtnNavComponent } from './components/btn-nav/btn-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';

@NgModule({
    declarations: [
        AppComponent,
        GalleryComponent,
        RoundbtnComponent,
        MapComponent,
        BtnNavComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        OverlayModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
