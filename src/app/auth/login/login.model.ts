export class LoginModel {
    password: string;
    userName: string


    constructor(password: string, userName: string) {
        this.password = password;
        this.userName = userName;
    }
}
