# AngularGoogleAnalyticsStarter

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.6.7.

This project has a basic structure with a few page components using routing.  The project focuses on the ability to google analytics.

## What you need to know about this project

The main portion of this code can be found in:

1. app/services/google/analytics/google-analytics.service.ts.  
2. assets/js/google-analytics.js
3. app.component.ts : wires up the service to do pageview tracking (technically this is all you need to to the pageview logs)

Optional  sections:

1. components/shared/navigation.componet.ts : shows custom event logging
2. components/public/home.compoent.ts: shows more custom event logging

The service sets up everything you need to use it from your componets.  The google-analytics.js is the barebones analytics setup.  **You will need to update the UA-ID to your google analytics id**


## Logging Examples

1. Set up general logging / page views.
2. Set up custom event logging
    1. Log an Login
    2. Log a logout
    3. Log an exception
    4. Log a search

## Basic logging / page views

This is accomplished by injecting the googleAnalyticsService into your componet and then subscribing to it.
For example add it to your app.componet.ts, then any componet routed through this component will automatically log to google analytics when the route changes

	constructor(private googleAnalyticsService: GoogleAnalyticsService) { 	}
	
	ngOnInit() {
    	// subscribe to the ga posts
    	this.googleAnalyticsService.subscribe();
  	}
	
	ngOnDestroy() {
    	// unsubscribe to the post
    	this.googleAnalyticsService.unsubscribe();
  	}

## Logging Custom Events

In addiion to the normal page logging, you can log custom events from any component.  To do this, follow the same patter of injecting the server to your component, then based on an event or whatever you like, you can log it.

	constructor(public googleAnalytics: GoogleAnalyticsService) { }
	
	// example of logging an error
	
	try {
	  // this is just a test, assume you are calling a service that errors out
	  throw new Error('this is a test exception');

	} catch (err) {
		// i'm adding a numeric value here for additonal infomration
	 	 this.googleAnalytics.trackEvent('error', err, ''[more info if needed], 100);
	}
  	
	
	// example of logging an applicaiton user login action
	this.googleAnalyticsService.trackEvent('login', this.username, response ? 'success' : 'fail');
	
	// example of logging an application  log out
	this.googleAnalyticsService.trackEvent('security', `logout ${this.userName}`);
	

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
