import { Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { OceanConditionsComponent } from './Components/ocean-conditions/ocean-conditions.component';

export const routes: Routes = [

    { path: '', component: HomeComponent },
    { path: 'condicoes-oceano', component: OceanConditionsComponent },
    { path: '**', component: HomeComponent },

];
