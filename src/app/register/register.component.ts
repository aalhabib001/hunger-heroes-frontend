import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    constructor() {
    }

    ngOnInit(): void {
    }

    handleRegister(email: HTMLInputElement, name: HTMLInputElement, phone: HTMLInputElement, pass: HTMLInputElement) {
        console.log(email.value)
    }
}
