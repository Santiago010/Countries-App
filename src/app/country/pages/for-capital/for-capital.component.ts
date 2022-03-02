import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/contry.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-for-capital',
  templateUrl: './for-capital.component.html',
})
export class ForCapitalComponent {
  term: string = '';
  hayError: Boolean = false;
  countries: Country[] = [];

  constructor(private countryService: CountryService) {}

  search(term: string) {
    // console.log(term);
    this.term = term;
    if (this.term.trim().length === 0) return;
    this.countryService.searchCapital(this.term).subscribe(
      (respCountries) => {
        this.hayError = false;
        this.countries = respCountries;

        console.log(this.countries);
      },
      (err) => {
        this.hayError = true;
        this.countries = [];
      }
    );
  }
}
