import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {RegisterModel} from "./register/register.model";
import {environment} from "../../environments/environment";
import {ApiMessageResponse} from "../shared/model/api-message.response";
import {LoginModel} from "./login/login.model";
import {LoginResponse} from "./login/login.response";
import {BehaviorSubject, throwError} from "rxjs";
import {Router} from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    url = environment.urls.host;
    user = new BehaviorSubject<string>("");
    isAdmin = new BehaviorSubject<boolean>(false);
    private tokenExpirationTimer: any;

    constructor(private http: HttpClient, private router: Router) {
    }

    private static generateExpireDate(token: string) {
        return new Date(new Date().getTime() + JSON.parse(atob(token.split('.')[1]))['exp']).getTime();
    }

    private static getExpirationDuration(expirationDate: number) {
        return expirationDate - new Date().getTime();
    }

    register(registerModel: RegisterModel) {
        return this.http.post<ApiMessageResponse<string>>(this.url + "/auth/signUp", registerModel);
    }

    login(loginModel: LoginModel) {
        return this.http.post<ApiMessageResponse<LoginResponse>>(this.url + "/auth/signIn", loginModel);
    }

    public handleAuthentication(token: string) {
        const expirationDate = AuthService.generateExpireDate(token);

        this.user.next(token);

        localStorage.setItem('jwt', token);

        this.autoLogin();
        const expirationDuration = AuthService.getExpirationDuration(expirationDate);
        this.autoLogout(expirationDuration);
    }

    logout() {
        this.user.next("");
        this.router.navigate(['/login']);
        localStorage.removeItem('jwt');

        if (!this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        this.tokenExpirationTimer = null;

        this.autoLogin();
    }

    autoLogin(): boolean {
        const token = localStorage.getItem('jwt');

        if (!token) {
            return false;
        }

        // decode token to get user data
        const decodedToken = JSON.parse(atob(token.split('.')[1]));
        this.isAdmin.next(decodedToken.sub === 'admin');

        if (token) {
            this.user.next(token);
            const expirationDuration = AuthService.getExpirationDuration(AuthService.generateExpireDate(token));
            this.autoLogout(expirationDuration);

            return true;
        }

        return false;
    }

    autoLogout(expirationDuration: number) {

        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
    }

    private handleError(errRes: HttpErrorResponse) {
        let errorMsg = errRes.error.error.message;
        return throwError(errorMsg);
    }
}

