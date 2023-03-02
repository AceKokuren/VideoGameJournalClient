import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {CreateComponent} from './create/create.component';
import {ViewComponent} from './view/view.component';
import {JournalComponent} from './journal/journal.component';
import {HomeComponent} from './home/home.component';
import {RouterModule} from "@angular/router";
import {APP_ROUTES} from "./app.routes";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ViewComponent,
    JournalComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(APP_ROUTES),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
