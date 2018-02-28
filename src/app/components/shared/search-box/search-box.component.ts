import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-box',
  templateUrl: './search-box.component.html',
  styleUrls: ['./search-box.component.css']
})
export class SearchBoxComponent implements OnInit {

  query = ''; // variable to hold our query data (this will be bound to the text control in the html file)

  // inject the router so we can use it down in the search function
  constructor(private router: Router) { }

  ngOnInit() {
  }

  search(): void {

    // we're using template forms for this sample, so the query variable is bound to the ngModel text box
    // here we're responding to the click event of the search button.  since we're doing two-way binding using
    // [(ngModel)] on the input control, the query variable is being updated by angular, so it matches the value in the textbox
    this.router.navigate(['search'], { queryParams: { 'q': this.query } });
  }

}
