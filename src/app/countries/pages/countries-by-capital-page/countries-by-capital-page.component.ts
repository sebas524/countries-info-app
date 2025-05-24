import {Component, inject, signal} from '@angular/core';
import {CountriesSearchBarComponent} from '../../components/countries-search-bar/countries-search-bar.component';
import {CountriesListComponent} from '../../components/countries-list/countries-list.component';
import {CountryService} from '../../services/country.service';
import {of} from 'rxjs';
import {rxResource} from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-countries-by-capital-page',
  imports: [CountriesSearchBarComponent, CountriesListComponent],
  templateUrl: './countries-by-capital-page.component.html',
  styleUrl: './countries-by-capital-page.component.css'
})
export class CountriesByCapitalPageComponent {

  countryService = inject(CountryService)

  // isLoading = signal(false)
  // containsError = signal<string | null>(null)
  // countriesArray = signal<Country[]>([])
  //
  // onSearch(query: string) {
  //   if (this.isLoading()) return
  //   this.isLoading.set(true);
  //   this.containsError.set(null)
  //
  //
  //   this.countryService.searchByCapital(query).subscribe({
  //     next: (resp) => {
  //       this.isLoading.set(false);
  //       this.countriesArray.set(resp)
  //     },
  //     error: (err) => {
  //       this.isLoading.set(false);
  //       this.countriesArray.set([])
  //       this.containsError.set(err)
  //     }
  //   });
  //
  // }


  // query = signal('')
  //
  // countryResource = resource({
  //
  //   request: () => ({query: this.query()}),
  //   loader: async ({request}) => {
  //     if (!request.query) return []
  //     return await firstValueFrom(
  //       this.countryService.searchByCapital(request.query)
  //     )
  //   }
  //
  //
  // })


  query = signal('')

  countryResource = rxResource({

    request: () => ({query: this.query()}),
    loader: ({request}) => {
      if (!request.query) return of([])
      return this.countryService.searchByCapital(request.query)

    }


  })
}
