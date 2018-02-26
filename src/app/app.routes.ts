import {Routes} from '@angular/router';
import {AboutComponent} from './about/about.component';
import {ServicesComponent} from './services/services.component';
import {HomeComponent} from './home/home.component';

export const rootRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: '**', redirectTo: ''}

];

