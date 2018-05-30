import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
// import { Observable } from 'rxjs/Observable';
// import { Subscription } from 'rxjs/Subscription';
// import { AuthenticationService } from '../../security2/services/authentication.service';
// import { NavigationService } from '../navigation.service';
// import { UsersService } from '../../security/services/users.service';
// import { IUser, User } from '../../security/models/user.model';

@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {
  @Input() title = 'Dashboard';
  @Output() toggleSideNavClick = new EventEmitter();

  // private user: IUser;
  private statusMessage: string;
  private _localStorageCurrentUserKey = 'currentUser';

  constructor(// private _route: ActivatedRoute,
    private _router: Router) { }
    // ,
    // private _navigation: NavigationService,
    // private authenticationService: AuthenticationService) { }

  ngOnInit() {
   // this.user = this.getUserFromLocalStorage();
  }

  // private getUserFromLocalStorage(): IUser {
  //   const valueToReturn = <IUser>JSON.parse(localStorage.getItem(this._localStorageCurrentUserKey));
  //   return valueToReturn;
  // }

  toggleSideNav(): void {
    this.raiseToggleSideNavClickEvent();
  }

  raiseToggleSideNavClickEvent(): void {
    this.toggleSideNavClick.emit();
  }

  gotoMySettings() {
    this._router.navigate(['/mysettings']);
  //  this._navigation.setBreadCrumbs('My Settings');
  }

  gotoMyAlerts() {
    this._router.navigate(['/alerts']);
  //  this._navigation.setBreadCrumbs('Alerts');
  }

  gotoMyNotifications() {
    this._router.navigate(['/notifications']);
  //  this._navigation.setBreadCrumbs('Notifications');
  }

  gotoMyRequests() {
    this._router.navigate(['/requests']);
  //  this._navigation.setBreadCrumbs('Requests');
  }

  signOut(): void {
 //   this.authenticationService.logout();
    this._router.navigate(['/login']);
  //  this._navigation.setBreadCrumbs('Login');
  }
}
