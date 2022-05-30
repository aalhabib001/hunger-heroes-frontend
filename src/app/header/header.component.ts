import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth/auth.service";
import {Router} from "@angular/router";
import {ProfileResponse} from "./profile.response";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

    isLoggedIn: boolean = false;
    isAdmin: boolean = false;
    // @ts-ignore
    profileModel: ProfileResponse;

    constructor(private _authService: AuthService,
                private _router: Router) {
    }

    ngOnInit(): void {
        this._authService.autoLogin();
        this._authService.user.subscribe(
            token => {
                this.isLoggedIn = !!token;

                if (this.isLoggedIn) {
                    this._authService.getProfile().subscribe(
                        res => {
                            this.profileModel = res.data;
                        },
                        error => {
                            console.log(error)
                        }
                    )
                }
            }
        )

        this._authService.isAdmin.subscribe(
            isAdmin => {
                this.isAdmin = isAdmin;
            }
        )
    }

    changeLogin() {
        this._authService.logout();
    }
}
