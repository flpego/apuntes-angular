import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FirtsComponentComponent } from './firts-component/firts-component.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { AfClassTsComponent } from './af-class-ts/af-class-ts.component';
import { FormsComponent } from './forms/forms.component';
import { ComunicacionComponent } from './comunicacion/comunicacion.component';

@NgModule({
  declarations: [
    AppComponent,
    FirtsComponentComponent,
    DirectivasComponent,
    AfClassTsComponent,
    FormsComponent,
    ComunicacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
