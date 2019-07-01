import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({ templateUrl: 'home.component.html' })
export class HomeComponent implements OnInit {
    pager = {};
    pageOfItems = [];

    constructor(
        private http: HttpClient,
        private route: ActivatedRoute
    ) { }

    ngOnInit() {
        // load page based on 'page' query param or default to 1
        this.route.queryParams.subscribe(x => this.loadPage(x.page || 1));
    }

    private loadPage(page) {
        // get page of items from api
        this.http.get<any>(`/api/items?page=${page}`).subscribe(x => {
            this.pager = x.pager;
            this.pageOfItems = x.pageOfItems;
        });
    }
}
