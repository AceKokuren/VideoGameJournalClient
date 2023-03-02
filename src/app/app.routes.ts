import {Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {CreateComponent} from "./create/create.component";
import {ViewComponent} from "./view/view.component";
import {JournalComponent} from "./journal/journal.component";

export const APP_ROUTES: Routes = [
  { path: '', component: HomeComponent },
  { path: 'create', component: CreateComponent },
  { path: 'view', component: ViewComponent },
  { path: 'journal', component: JournalComponent },
  { path: '**', redirectTo: '' }
];
