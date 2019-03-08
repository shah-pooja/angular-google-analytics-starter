import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Subscriber } from 'rxjs/Subscriber';
import { GoogleAnalyticsService } from '../../../services/google/analytics/google-analytics.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit, OnDestroy {

  public title = 'search';
  private subscription: Subscription;
  public query: string;

  constructor(private route: ActivatedRoute, private router: Router, private googleaAnalytics: GoogleAnalyticsService) { }


  ngOnInit() {

    // lets watch for changes in the route
    this.subscription = this.route.queryParams.subscribe(p => {
        // get the parameter of 'q' for our query, this is what we are expecting
        // if you want something else you should indicate it here
        this.query =  p['q'] || null;

        this.googleaAnalytics.trackEvent('search', 'value', this.query);
    });
  }

  ngOnDestroy() {
    // no need to watch for this so let's remove it so we don't create memory leaks or double up on the processing.
    this.subscription.unsubscribe();
  }


}
