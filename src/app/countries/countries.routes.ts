import {Routes} from '@angular/router';
import {CountriesLayoutComponent} from './layouts/countries-layout/countries-layout.component';
import {CountriesByCapitalPageComponent} from './pages/countries-by-capital-page/countries-by-capital-page.component';
import {CountriesByCountryPageComponent} from './pages/countries-by-country-page/countries-by-country-page.component';
import {CountriesByRegionPageComponent} from './pages/countries-by-region-page/countries-by-region-page.component';

export const countriesRoutes: Routes = [
  {
    path: '',
    component: CountriesLayoutComponent,
    children: [
      {
        path: 'by-capital',
        component: CountriesByCapitalPageComponent
      },
      {
        path: 'by-country',
        loadComponent: () =>
          import('./pages/countries-by-country-page/countries-by-country-page.component')
            .then(m => m.CountriesByCountryPageComponent)
      },
      {
        path: 'by-region',
        loadComponent: () =>
          import('./pages/countries-by-region-page/countries-by-region-page.component')
            .then(m => m.CountriesByRegionPageComponent)
      },
      {
        path: 'specific/:countryId',
        loadComponent: () =>
          import('./pages/countries-country-info-page/countries-country-info-page.component')
            .then(m => m.CountriesCountryInfoPageComponent)
      },
      {
        path: '**',
        redirectTo: 'by-capital'
      }
    ]

  },

];
