import {Component, Input, OnInit} from '@angular/core';
import {FoodResponseModel} from "../food.response.model";
import {FoodRequestsService} from "../food-requests.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-food-card',
    templateUrl: './food-card.component.html',
    styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent implements OnInit {

    // @ts-ignore
    @Input() foodResponseModel: FoodResponseModel;
    @Input() isAdmin: boolean = false;


    constructor(private _foodRequestsService: FoodRequestsService,
                private _toaster: ToastrService,
                private _router: Router) {

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
                this._router.navigate(['/food-requests']);
            },
            (error: any) => {
                console.log(error);
            }
        );
    }

    rejectRequest(id: number) {

    }

    confirmRequest(id: number) {
        this._foodRequestsService.confirmRequest(id).subscribe(
            res => {
                this._toaster.success(res.message, "Success");
                this._router.navigate(['/']).then(
                    () => {
                        this._router.navigate(['/food-requests']);
                    });

            },
            error => {
                console.log(error)
                this._toaster.error("Something went wrong", "Error");
            }
        )
    }
}
