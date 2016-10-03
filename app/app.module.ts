import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { CountryDetailComponent } from './country-detail.component';
import { Pipe, PipeTransform } from '@angular/core';
import {OrderBy } from './orderBy-pipe';
@NgModule({
    imports: [
        BrowserModule,
        FormsModule
    ],
    declarations: [
        AppComponent,
        CountryDetailComponent,
        OrderBy
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }