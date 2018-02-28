import { Component, OnInit } from '@angular/core';
import { GoogleAnalyticsService } from '../../../services/google/analytics/google-analytics.service';



@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {


  username = '';
  fullName = '';
  memberSince = '';



  constructor(private googleAnalyticsService: GoogleAnalyticsService) { }

  ngOnInit() {
  }


  /** simulate a log out */
  logout(): void {

    const tempUserName = this.username;
    // log the user out which should clear the user info
    /*
    if (this.securityService.logout()) {
      console.log('user logged out');
    }
    */

    // manaully clear it here, since this is a demo
    this.clearUserNameMessage();


    // logging example
    this.googleAnalyticsService.trackEvent('security', 'logout');
    this.googleAnalyticsService.trackEvent('security', `logout ${tempUserName}`);

  }

  clearUserNameMessage() {
    // we'll assume a user object is used and has been set to null or cleared out
    this.username = '';
    this.fullName = '';

  }



  login(): void {

    // typically you'd have a login service of some sort
    /*
    if (this.securityService.login(username, password)) {
      console.log(this.securityService.token.claims)
      console.log(`user ${username} logged in`);
    } else {
      console.log(`user ${username} login failed`);
    }
    */

    // fake a response since this is a demo
    const response = true;

    this.username = 'john.smith@localhost.com';
    this.fullName = 'John Smith';
    this.memberSince = '2018';

    // log if they are successful or not
    // this is just an example, you can send and track the parameters, however you choose
    this.googleAnalyticsService.trackEvent('login', this.username, response ? 'success' : 'fail');

    // another example
    this.googleAnalyticsService.trackEvent('security', 'login', response ? 'success' : 'fail' );

    // another example
    this.googleAnalyticsService.trackEvent('security', `login ${this.username}`, response ? 'success' : 'fail');


  }

}
