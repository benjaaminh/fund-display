import { Component, OnInit, inject } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-fund-list',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './fund-list.component.html',
})
export class FundListComponent implements OnInit {

  httpClient= inject(HttpClient);
  data: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }

  fetchData() {
    this.httpClient
      .get('https://ivarpivar.netlify.app/api')
      .subscribe((response: any) => {
        //response array is one element with data and status, we want to fetch data since it contains the relevant info
        if (response && response.length > 0 && response[0].data && response[0].data.length > 0) {
          this.data = response[0].data;
        } else {
          console.error('Invalid API response format');
        }
      });
  }
}