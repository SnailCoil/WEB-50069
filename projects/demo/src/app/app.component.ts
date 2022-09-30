import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // If you swap template out for templateUrl, then you can type "<lib1-" and it will autocomplete correctly.
  // template: ''
  templateUrl: 'app.component.html',
})
export class AppComponent {
  title = 'demo';
}
