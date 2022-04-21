import {Component, Input, OnInit} from '@angular/core';
import {FoodResponseModel} from "../food.response.model";
import {FoodRequestsService} from "../food-requests.service";

@Component({
    selector: 'app-food-card',
    templateUrl: './food-card.component.html',
    styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent implements OnInit {

    // @ts-ignore
    @Input() foodResponseModel: FoodResponseModel;
    @Input() isAdmin: boolean = false;


    constructor(private _foodRequestsService: FoodRequestsService) {

    }

    ngOnInit(): void {
    }

    getDate(createdOn: Date) {
        return new Date(createdOn).toLocaleDateString("en-IN") + " " + new Date(createdOn).toLocaleTimeString("en-IN");
    }

    approveRequest(id: number) {
        this._foodRequestsService.approveRequest(id).subscribe(
            res => {
                console.log(res);
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    rejectRequest(id: number) {

    }
}
