import {Routes} from '@angular/router';
import {HomePageComponent} from './shared/pages/home-page/home-page.component';

export const routes: Routes = [
  {
    path: '',
    // no need for lazy load cause this page will be shown to everyone:
    component: HomePageComponent,
  },
  {
    path: 'countries',
    loadChildren: () => {
      return import('./countries/countries.routes').then(m => m.countriesRoutes)
    }
  },
  {
    path: '**',
    redirectTo: ''
  }
];
