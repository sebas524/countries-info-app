import {Component, inject, resource,} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {rxResource} from '@angular/core/rxjs-interop';
import {CountryService} from '../../services/country.service';
import {NotFoundComponent} from '../../../shared/components/not-found/not-found.component';
import {CountryInfoComponent} from './country-info/country-info.component';

@Component({
  selector: 'app-countries-country-info-page',
  imports: [NotFoundComponent, CountryInfoComponent],
  templateUrl: './countries-country-info-page.component.html',
  styleUrl: './countries-country-info-page.component.css'
})
export class CountriesCountryInfoPageComponent {
  countryCode = inject(ActivatedRoute).snapshot.params['countryId'];
  countryService = inject(CountryService)


  countryResource = rxResource(
    {
      request: () => ({countryId: this.countryCode}),
      loader: ({request}) => {
        return this.countryService.searchByAlphaCode(request.countryId)
      }
    }
  )


  protected readonly resource = resource;
}
