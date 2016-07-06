import { provideRouter, RouterConfig }  from '@angular/router';

import { HeroesComponent } from './heroes.component';
import { DashboardComponent } from './dashboard.component';
import { HeroDetailComponent } from './hero-detail.component';


export const routes: RouterConfig = [
    {
        path: '',
        redirectTo: '/dashboard',
        terminal: true
    },
    {
        path: 'dashboard',
        component: DashboardComponent
    },
    {
        path: 'heroes',
        component: HeroesComponent
    },
    {
        path: 'detail/:id',
        component: HeroDetailComponent
    }
];

export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes)
];
