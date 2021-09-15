import {Component, Input, OnInit} from '@angular/core';
import {FoodRequestModel} from "../food-request.model";

@Component({
    selector: 'app-food-card',
    templateUrl: './food-card.component.html',
    styleUrls: ['./food-card.component.css']
})
export class FoodCardComponent implements OnInit {

    // @ts-ignore
    @Input() foodRequest: FoodRequestModel;

    constructor() {
    }

    ngOnInit(): void {
    }

}
