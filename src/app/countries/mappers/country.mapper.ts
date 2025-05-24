import {Country} from '../interfaces/country.interface';
import {RESTCountry} from '../interfaces/rest-countries.interface';
import {map} from 'rxjs';


export class CountryMapper {

  static mapApiCountryToCountry(countryFromApi: RESTCountry): Country {


    return {
      flagSvg: countryFromApi.flags.svg,
      capital: countryFromApi.capital,
      cca2: countryFromApi.cca2,
      flag: countryFromApi.flag,
      name: countryFromApi.name.common,
      nameOfficial: countryFromApi.name.official,
      deutscherName: countryFromApi.translations['deu'].common,
      population: countryFromApi.population,
      location: countryFromApi.subregion,
      language: countryFromApi.languages
        ? Object.values(countryFromApi.languages).join(', ')
        : '',
      timeZone: countryFromApi.timezones
    }

  }

  static mapApiCountriesToCountries(countriesFromApi: RESTCountry[]): Country[] {
    return countriesFromApi.map(
      (country) => {
        return this.mapApiCountryToCountry(country);
      }
    )
  }

}
