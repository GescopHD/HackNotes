import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'HackNotes';
  events: string[] = [];
  opened: boolean = true;
  panelOpenState: boolean = false;

}
