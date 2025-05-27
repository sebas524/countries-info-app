import { Component, inject, linkedSignal, signal } from '@angular/core';
import { CountriesListComponent } from '../../components/countries-list/countries-list.component';
import { Region } from '../../interfaces/region.type';
import { CountryService } from '../../services/country.service';
import { rxResource } from '@angular/core/rxjs-interop';
import { of } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';

function validateQueryParam(queryParam: string): Region {
  queryParam = queryParam.toLowerCase();
  const validRegions: Record<string, Region> = {
    africa: 'Africa',
    americas: 'Americas',
    asia: 'Asia',
    europe: 'Europe',
    oceania: 'Oceania',
    antarctic: 'Antarctic',
  };
  return validRegions[queryParam] ?? 'Americas';
}

@Component({
  selector: 'app-countries-by-region-page',
  imports: [CountriesListComponent],
  templateUrl: './countries-by-region-page.component.html',
  styleUrl: './countries-by-region-page.component.css',
})
export class CountriesByRegionPageComponent {
  countryService = inject(CountryService);

  public regions: Region[] = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'Antarctic',
  ];

  activatedRoute = inject(ActivatedRoute);

  router = inject(Router);

  queryParam = this.activatedRoute.snapshot.queryParamMap.get('region') ?? '';

  chosenRegion = linkedSignal<Region>(() =>
    validateQueryParam(this.queryParam)
  );

  countryResource = rxResource({
    request: () => ({ region: this.chosenRegion() }),
    loader: ({ request }) => {
      if (!request.region) return of([]);
      this.router.navigate(['/countries/by-region'], {
        queryParams: { region: request.region },
      });
      return this.countryService.searchByRegion(request.region);
    },
  });
}
