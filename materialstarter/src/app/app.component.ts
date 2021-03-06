import {
  Component, ElementRef
} from '@angular/core';
import { VERSION } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  version = VERSION;
  public isSideNavOpen = true;

  onToggleSideNavClick(): void {
    this.isSideNavOpen = !this.isSideNavOpen;
  }
}
