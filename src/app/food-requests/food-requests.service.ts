import {Injectable} from '@angular/core';
import {FoodRequestModel} from "./create-food-request/foodrequest.model";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {ApiMessageResponse} from "../shared/model/api-message.response";
import {PaginationResponse} from "../shared/model/pagination.response";
import {FoodResponseModel} from "./food.response.model";

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

    getFoodRequests() {
        return this.http.get<PaginationResponse<FoodResponseModel>>(this.url);
    }

    getFoodRequestsAdmin() {
        return this.http.get<PaginationResponse<FoodResponseModel>>(this.url + '?isApproved=false');
    }

    approveRequest(id: number) {
        return this.http.put<ApiMessageResponse<any>>(this.url + '/' + id + '/approve', {});
    }
}
