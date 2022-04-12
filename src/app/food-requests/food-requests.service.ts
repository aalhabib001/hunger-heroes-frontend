import {Injectable} from '@angular/core';
import {FoodRequestModel} from "./create-food-request/foodrequest.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ApiMessageResponse} from "../shared/model/api-message.response";

@Injectable({
    providedIn: 'root'
})
export class FoodRequestsService {

    url = environment.urls.host + '/api/food-share';

    constructor(private http: HttpClient) {
    }


    createFoodRequest(foodRequestModel: FoodRequestModel) {
        return this.http.post<ApiMessageResponse<any>>(this.url, foodRequestModel);
    }
}
