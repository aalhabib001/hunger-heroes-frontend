export class RegisterModel {
    password: string;
    phoneNo: string;
    userName: string;
    userType: string
    name: string;

    constructor(password: string, phoneNo: string, userName: string, userType: string, name: string) {
        this.password = password;
        this.phoneNo = phoneNo;
        this.userName = userName;
        this.userType = userType;
        this.name = name;
    }
}
