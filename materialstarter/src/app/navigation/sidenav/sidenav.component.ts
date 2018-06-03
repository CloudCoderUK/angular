import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.css']
})
export class SidenavComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }

  gotoHome(): void {
    this._router.navigate(['/home']);
  }

  gotoDashboard(): void {
    this._router.navigate(['/dashboard']);
  }

  gotoSample(): void {
    this._router.navigate(['/sample']);
  }
}
