import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {LoginModel} from "./login.model";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private _authService: AuthService,
                private _toaster: ToastrService,
                private _router: Router) {
    }

    ngOnInit(): void {
    }

    handleLogin(userName: HTMLInputElement, pass: HTMLInputElement) {
        let loginModel: LoginModel = new LoginModel(pass.value, userName.value);

        console.log(loginModel);

        this._authService.login(loginModel).subscribe(
            res => {
                console.log(res);
                this._authService.handleAuthentication(res.data.token);
                this._toaster.success(res.message, "Success");

            },
            error => {
                console.log(error)
                this._toaster.error("Something went wrong", "Error");
            }
        );


    }
}
