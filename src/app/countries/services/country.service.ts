import {inject, Injectable, signal} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';
import {catchError, map, Observable, of, tap, throwError,} from 'rxjs';
import {RESTCountry} from '../interfaces/rest-countries.interface';
import {CountryMapper} from '../mappers/country.mapper';
import {Country} from '../interfaces/country.interface';
import {Region} from '../interfaces/region.type';

@Injectable({
  providedIn: 'root'
})
export class CountryService {

  private http = inject(HttpClient)

  private queryCacheByCapital = new Map<string, Country[]>()
  private queryCacheByCountry = new Map<string, Country[]>()
  private queryCacheByRegion = new Map<Region, Country[]>()

  constructor() {
  }

  searchByCapital(query: string): Observable<Country[]> {
    query.toLowerCase()

    if (this.queryCacheByCapital.has(query)) {
      return of(this.queryCacheByCapital.get(query)!)
    }

    console.log(`reaching server with ${query} query`)
    return this.http.get<RESTCountry[]>(`${environment.countriesApiUrl}/capital/${query}`).pipe(
      map((resp) => {
        return CountryMapper.mapApiCountriesToCountries(resp)
      }), tap(
        (countries) => {
          return this.queryCacheByCapital.set(query, countries)
        }
      ),
      catchError((error) => {
        return throwError(() => {
          return new Error(`Could not get any capitals under given query: ${query}`);
        })
      })
    )
  }

  searchByCountry(query: string): Observable<Country[]> {
    query.toLowerCase()

    if (this.queryCacheByCountry.has(query)) {
      return of(this.queryCacheByCountry.get(query)!)
    }

    console.log(`reaching server with ${query} query`)
    return this.http.get<RESTCountry[]>(`${environment.countriesApiUrl}/name/${query}`).pipe(
      map((resp) => {
        return CountryMapper.mapApiCountriesToCountries(resp)
      }), tap(
        (countries) => {
          return this.queryCacheByCountry.set(query, countries)
        }
      ),
      catchError((error) => {
        return throwError(() => {
          return new Error(`Could not get any countries under given query: ${query}`);
        })
      })
    )
  }

  searchByRegion(region: Region): Observable<Country[]> {

    if (this.queryCacheByRegion.has(region)) {
      return of(this.queryCacheByRegion.get(region)!)
    }

    console.log(`reaching server with ${region} query`)
    return this.http.get<RESTCountry[]>(`${environment.countriesApiUrl}/region/${region}`).pipe(
      map((resp) => {
        return CountryMapper.mapApiCountriesToCountries(resp)
      }), tap(
        (countries) => {
          return this.queryCacheByRegion.set(region, countries)
        }
      ),
      catchError((error) => {
        return throwError(() => {
          return new Error(`Could not get any countries under given query: ${region}`);
        })
      })
    )
  }

  searchByAlphaCode(code: string): Observable<Country | undefined> {
    return this.http.get<RESTCountry[]>(`${environment.countriesApiUrl}/alpha/${code}`).pipe(
      map((resp) => {
        return CountryMapper.mapApiCountriesToCountries(resp)
      }),
      map((countries) => {
        return countries.at(0)
      }),
      catchError((error) => {
        return throwError(() => {
          return new Error(`Could not get any countries under given query: ${code}`);
        })
      })
    )
  }
}

