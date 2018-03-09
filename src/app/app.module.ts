import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';

// add bootstrap components
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { ModalModule } from 'ngx-bootstrap/modal';

// add our stuff
import {rootRoutes} from './app.routes';
import { GoogleAnalyticsService } from './services/google/analytics/google-analytics.service';
import { ProductsComponent } from './components/public/products/products.component';
import { SearchComponent } from './components/public/search/search.component';
import { NavigationComponent } from './components/shared/navigation/navigation.component';
import { AboutComponent } from './components/public/about/about.component';
import { HomeComponent } from './components/public/home/home.component';
import { SearchBoxComponent } from './components/shared/search-box/search-box.component';
import { HelpComponent } from './components/public/help/help.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    ProductsComponent,
    SearchComponent,
    NavigationComponent,
    SearchBoxComponent,
    HelpComponent,

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRoutes),
    BsDropdownModule.forRoot(),
    TooltipModule.forRoot(),
    ModalModule.forRoot(),
    FormsModule
  ],
  providers: [ GoogleAnalyticsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
