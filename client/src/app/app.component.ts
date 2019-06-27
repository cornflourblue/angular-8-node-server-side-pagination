import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent {
    pager = {};
    pageOfItems = [];

    constructor(private http: HttpClient) {
        // start on page 1
        this.setPage(1);
    }

    setPage(page: number) {
        // get new pager object and page of items from the api
        this.http.get<any>(`/api/items?page=${page}`)
            .subscribe(response => {
                this.pager = response.pager;
                this.pageOfItems = response.pageOfItems;
            });
    }
}
