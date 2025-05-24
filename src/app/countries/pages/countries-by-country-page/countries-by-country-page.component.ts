import {Component, inject, resource, signal} from '@angular/core';
import {CountriesSearchBarComponent} from '../../components/countries-search-bar/countries-search-bar.component';
import {CountriesListComponent} from '../../components/countries-list/countries-list.component';
import {CountryService} from '../../services/country.service';
import {firstValueFrom, of} from 'rxjs';
import {rxResource} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-countries-by-country-page',
  imports: [CountriesSearchBarComponent, CountriesListComponent],
  templateUrl: './countries-by-country-page.component.html',
  styleUrl: './countries-by-country-page.component.css'
})
export class CountriesByCountryPageComponent {
  countryService = inject(CountryService)

  query = signal('')

  countryResource = rxResource({

    request: () => ({query: this.query()}),
    loader: ({request}) => {
      if (!request.query) return of([])
      return this.countryService.searchByCountry(request.query)

    }


  })

}
