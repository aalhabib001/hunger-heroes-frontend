import {Component, OnInit} from '@angular/core';
import {RegisterModel} from "./register.model";
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor(private _authService: AuthService,
                private _router: Router,
                private _toaster: ToastrService) {
    }

    ngOnInit(): void {
    }

    handleRegister(userName: HTMLInputElement, name: HTMLInputElement, phone: HTMLInputElement, pass: HTMLInputElement, userType: HTMLSelectElement) {

        let registerModel: RegisterModel = new RegisterModel(pass.value, phone.value, userName.value, userType.value);

        console.log(registerModel);
        this._authService.register(registerModel).subscribe(
            res => {
                console.log(res)
                this._router.navigate(["/login"]);
                this._toaster.success(res.message, "Success");
            },
            error => {
                console.log(error)
                this._toaster.error("Something Wrong", "Error");
            }
        )

    }
}
