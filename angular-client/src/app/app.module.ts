import { PostComponent } from './components/post/post.component';
import { OverlayComponent } from './components/overlay/overlay.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
 
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GalleryComponent } from "./components/gallery/gallery.component";
import { HttpClientModule } from "@angular/common/http";
import { RoundbtnComponent } from './components/roundbtn/roundbtn.component';
import { MapComponent } from './components/map/map.component';
import { BtnNavComponent } from './components/btn-nav/btn-nav.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { OverlayModule } from '@angular/cdk/overlay';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { RoundbtnExpandComponent } from './components/roundbtn-expand/roundbtn-expand.component';
import localeCH from '@angular/common/locales/de-CH';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localeCH);



@NgModule({
    declarations: [
        AppComponent,
        GalleryComponent,
        RoundbtnComponent,
        MapComponent,
        BtnNavComponent,
        OverlayComponent,
        RoundbtnExpandComponent,
        PostComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        BrowserAnimationsModule,
        OverlayModule,
        MatDialogModule,
        MatFormFieldModule,
        FormsModule,
        MatInputModule,
        ReactiveFormsModule,
        MatSelectModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MatIconModule,
        
        
        
        
    ],
    providers: [
        {
          provide: MatDialogRef,

        
          useValue: {}
        },{provide: LOCALE_ID, useValue: 'de-CH' },
        
     ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
