import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { LoginComponent } from './security2/login/login.component';

import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SampleComponent } from './sample/sample.component';

const routes: Routes = [
    // {
    //     path: 'login',
    //     component: LoginComponent
    // },
    // {
    //     path: '', loadChildren: './dashboard/dashboard.module#DashboardModule'
    // }, {
    //     path: '', loadChildren: './action/action.module#ActionModule'
    // }, {
    //     path: '', loadChildren: './group/group.module#GroupModule'
    // }, {
    //     path: '', loadChildren: './corporate/corporate.module#CorporateModule'
    // }, {
    //     path: '', loadChildren: './regulation/regulation.module#RegulationModule'
    // }, {
    //     path: '', loadChildren: './security/security.module#SecurityModule'
    // }, {
    //     path: '', loadChildren: './messaging/messaging.module#MessagingModule'
    // },
    {
        path: '',
        component: HomeComponent
    }, {
        path: 'home',
        component: HomeComponent
    }, {
        path: 'dashboard',
        component: DashboardComponent
    }, {
        path: 'sample',
        component: SampleComponent
    }
];

export const appRoutes = RouterModule.forRoot(routes);
