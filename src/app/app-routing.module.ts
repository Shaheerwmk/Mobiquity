import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CityInfoComponent } from './city-info/city-info.component';
import { CityComponent } from './city/city.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home/city', pathMatch: 'full' },
  {
    path: 'home', component: AppComponent, children: [
      {
        path: 'city',
        component: CityComponent,
      },
      {
        path: 'cityInfo/:cityName',
        component: CityInfoComponent
      }
    ]
  },
  { path : 'programs', loadChildren : () => import('src/app/programs/programs.module').then(m => m.ProgramsModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
