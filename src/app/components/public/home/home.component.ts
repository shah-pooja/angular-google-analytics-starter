import { Component, OnInit, InjectionToken, Injectable } from '@angular/core';
import { GoogleAnalyticsService } from '../../../services/google/analytics/google-analytics.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public title = 'home';
  // only need to use the DI for googleAnalytics so we can track a custom event
  constructor(public googleAnalytics: GoogleAnalyticsService) { }




  ngOnInit() {

  }


  logError(): void {
    try {

      throw new Error('this is a test exception');

    } catch (err) {

      this.googleAnalytics.trackEvent('error', err, '', 100);
    }


  }

  logCustomEvent(): void {
    this.googleAnalytics.trackEvent('custom', 'event', 'clicked');
  }








}




