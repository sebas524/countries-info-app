import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountriesSearchBarComponent } from '../../components/countries-search-bar/countries-search-bar.component';
import { CountriesListComponent } from '../../components/countries-list/countries-list.component';
import { CountryService } from '../../services/country.service';
import { of } from 'rxjs';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-countries-by-capital-page',
  imports: [CountriesSearchBarComponent, CountriesListComponent],
  templateUrl: './countries-by-capital-page.component.html',
  styleUrl: './countries-by-capital-page.component.css',
})
export class CountriesByCapitalPageComponent {
  countryService = inject(CountryService);

  activatedRoute = inject(ActivatedRoute);

  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('query') ?? '';

  query = linkedSignal(() => this.queryParam);

  countryResource = rxResource({
    request: () => ({ query: this.query() }),
    loader: ({ request }) => {
      if (!request.query) return of([]);

      this.router.navigate(['/countries/by-capital'], {
        queryParams: { query: request.query },
      });
      return this.countryService.searchByCapital(request.query);
    },
  });
}
