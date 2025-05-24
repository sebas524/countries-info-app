import { Component } from '@angular/core';
import {CountriesListComponent} from '../../components/countries-list/countries-list.component';

@Component({
  selector: 'app-countries-by-region-page',
  imports: [CountriesListComponent],
  templateUrl: './countries-by-region-page.component.html',
  styleUrl: './countries-by-region-page.component.css'
})
export class CountriesByRegionPageComponent {

}
