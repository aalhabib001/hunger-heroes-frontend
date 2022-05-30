import {Component, OnInit} from '@angular/core';
import {FoodRequestsService} from "./food-requests.service";
import {FoodResponseModel} from "./food.response.model";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-food-requests',
    templateUrl: './food-requests.component.html',
    styleUrls: ['./food-requests.component.css']
})
export class FoodRequestsComponent implements OnInit {

    foodRequests: FoodResponseModel[] = [];
    title: string = 'Food Requests';
    isAdmin: boolean = false;

    constructor(private _foodRequestsService: FoodRequestsService,
                private _toaster: ToastrService,
                private _router: Router) {
        if (this._router.url.includes('admin')) {
            this.isAdmin = true;
            this.title = 'Admin Food Requests';
        }
    }

    ngOnInit(): void {
        if (this.isAdmin) {
            this._foodRequestsService.getFoodRequestsAdmin().subscribe(
                res => {
                    this.foodRequests = res.data;
                }
            );
        } else {
            this._foodRequestsService.getFoodRequests().subscribe(
                res => {
                    this.foodRequests = res.data;
                }
            );
        }

    }

}
