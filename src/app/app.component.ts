import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Project';

  whichPage = 'recipes';

  setPage(s: string) {
    this.whichPage = s;
  }
}
