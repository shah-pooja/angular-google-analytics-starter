import {Routes} from '@angular/router';
import {AboutComponent} from './components/public/about/about.component';
import {HomeComponent} from './components/public/home/home.component';
import { ProductsComponent } from './components/public/products/products.component';
import { SearchComponent } from './components/public/search/search.component';
import { HelpComponent } from './components/public/help/help.component';

export const rootRoutes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'search/:q', component: SearchComponent},
  {path: 'search', component: SearchComponent},
  {path: 'help', component: HelpComponent},
  {path: '**', redirectTo: ''}

];

