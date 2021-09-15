import {Component, OnInit} from '@angular/core';
import {FoodRequestModel} from "./food-request.model";
import {fakeFoodData} from "./FakeFoodRequestData";

@Component({
    selector: 'app-food-requests',
    templateUrl: './food-requests.component.html',
    styleUrls: ['./food-requests.component.css']
})
export class FoodRequestsComponent implements OnInit {

    foodRequests: FoodRequestModel[] = fakeFoodData;

    constructor() {

    }

    ngOnInit(): void {
    }

}
