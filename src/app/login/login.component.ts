import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    handleLogin(email: HTMLInputElement, pass: HTMLInputElement) {
        console.log(email.id + " " + email.value)
        console.log(pass.id + " " + pass.value)
    }
}
