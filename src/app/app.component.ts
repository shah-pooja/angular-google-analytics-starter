import { Component, OnInit, OnDestroy } from '@angular/core';
import { GoogleAnalyticsService } from './services/google/analytics/google-analytics.service';





/**
* declare ga so typescript transpiler and our linter doesn't complain
* this simply means that ga will be accessible by some other means
*/
declare let ga: Function;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit, OnDestroy {
  title = 'Google GA with an Angular SPA App';

  // Creates an instance of AppComponent and inject a router service we'll use in the component.
  constructor(private googleAnalyticsService: GoogleAnalyticsService) {

  }

  ngOnInit() {
    // subscribe to the ga posts
    this.googleAnalyticsService.subscribe();
  }

  ngOnDestroy() {
    // unsubscribe to the post
    this.googleAnalyticsService.unsubscribe();
  }


}
