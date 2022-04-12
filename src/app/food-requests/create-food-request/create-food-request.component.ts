import {Component, OnInit} from '@angular/core';
import {FoodRequestModel} from "./foodrequest.model";
import {FileUploadService} from "../../shared/service/file-upload.service";
import {FoodRequestsService} from "../food-requests.service";

@Component({
    selector: 'app-create-food-request',
    templateUrl: './create-food-request.component.html',
    styleUrls: ['./create-food-request.component.css']
})
export class CreateFoodRequestComponent implements OnInit {

    foodRequestModel: FoodRequestModel = new FoodRequestModel("", "", "", "");

    constructor(private _fileUploadService: FileUploadService,
                private _foodRequestService: FoodRequestsService) {
    }

    ngOnInit(): void {
    }


    onSubmit() {
        console.log(this.foodRequestModel)

        this._foodRequestService.createFoodRequest(this.foodRequestModel).subscribe(
            res => {
                console.log(res)
            },
            error => {
                console.log(error)
            }
        )

    }

    uploadFile(file: Event) {
        // @ts-ignore
        let image: File = (file.target as HTMLInputElement).files[0];

        console.log(image);

        this._fileUploadService.upload(image).subscribe(
            res => {

                this.foodRequestModel.imageLink = res.data.url;
            },
            error => {
                console.log(error);
            }
        )

    }

}

