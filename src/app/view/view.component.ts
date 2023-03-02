import { Component } from '@angular/core';
import {JournalService} from "../journal-service/journal.service";

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent {
  constructor(journalService: JournalService) {
  }

}
