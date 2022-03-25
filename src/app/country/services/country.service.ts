import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/contry.interfaces';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
  url: string = '';
  private apiUrl: string = 'https://restcountries.com/v3.1';

  constructor(private http: HttpClient) {}

  searchCountry(term: string): Observable<Country[]> {
    this.url = `${this.apiUrl}/name/${term}`;

    return this.http.get<Country[]>(this.url);
  }

  searchCapital(term: string): Observable<Country[]> {
    this.url = `${this.apiUrl}/capital/${term}`;
    return this.http.get<Country[]>(this.url);
  }

  getCountryForCca2(cca2: string): Observable<Country[]> {
    this.url = `${this.apiUrl}/alpha/${cca2}`;
    return this.http.get<Country[]>(this.url);
  }

  searchRegion(term: string): Observable<Country[]> {
    this.url = `${this.apiUrl}/region/${term}`;
    return this.http.get<Country[]>(this.url);
  }
}
