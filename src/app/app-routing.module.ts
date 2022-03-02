import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ForCountryComponent } from './country/pages/for-country/for-country.component';
import { ForRegionComponent } from './country/pages/for-region/for-region.component';
import { ForCapitalComponent } from './country/pages/for-capital/for-capital.component';
import { WatchCountryComponent } from './country/pages/watch-country/watch-country.component';

const routes: Routes = [
  {
    path: '',
    component: ForCountryComponent,
    pathMatch: 'full',
  },
  {
    path: 'region',
    component: ForRegionComponent,
  },
  {
    path: 'capital',
    component: ForCapitalComponent,
  },
  {
    path: 'pais/:cca2',
    component: WatchCountryComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
