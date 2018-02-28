import {Routes} from '@angular/router';
import {AboutComponent} from './components/public/about/about.component';
import {ServicesComponent} from './components/public/services/services.component';
import {HomeComponent} from './components/public/home/home.component';
import { ProductsComponent } from './components/public/products/products.component';
import { SearchComponent } from './components/public/search/search.component';

export const rootRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'search/:q', component: SearchComponent},
  {path: 'search', component: SearchComponent},
  {path: '**', redirectTo: ''}

];

