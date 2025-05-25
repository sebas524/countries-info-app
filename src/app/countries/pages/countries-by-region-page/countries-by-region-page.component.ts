import {Component, inject, signal} from '@angular/core';
import {CountriesListComponent} from '../../components/countries-list/countries-list.component';
import {Region} from "../../interfaces/region.type";
import {CountryService} from "../../services/country.service";
import {rxResource} from "@angular/core/rxjs-interop";
import {of} from "rxjs";

@Component({
    selector: 'app-countries-by-region-page',
    imports: [CountriesListComponent],
    templateUrl: './countries-by-region-page.component.html',
    styleUrl: './countries-by-region-page.component.css'
})
export class CountriesByRegionPageComponent {

    countryService = inject(CountryService)


    public regions: Region[] = [
        'Africa',
        'Americas',
        'Asia',
        'Europe',
        'Oceania',
        'Antarctic',
    ];

    chosenRegion = signal<Region | null>(null)


    countryResource = rxResource({

        request: () => ({region: this.chosenRegion()}),
        loader: ({request}) => {
            if (!request.region) return of([])
            return this.countryService.searchByRegion(request.region)

        }


    })


}
