import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';
import { Country } from '../../interfaces/contry.interfaces';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-watch-country',
  templateUrl: './watch-country.component.html',
  styles: [],
})
export class WatchCountryComponent implements OnInit {
  country!: Country;
  constructor(
    private activatedRoute: ActivatedRoute,
    private countryService: CountryService
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ cca2 }) => this.countryService.getCountryForCca2(cca2)),
        tap(console.log) // forma corta de hacer : tap(res => console.log(res))
      )
      .subscribe((country) => {
        const [destructureCountry] = country;
        this.country = destructureCountry;
        console.log(this.country);
      });
    // this.activatedRoute.params.subscribe(({ cca2 }) => {
    //   this.countryService
    //     .getCountryForCca2(cca2)
    //     .subscribe((country) => console.log(country));
    // });
  }
}
