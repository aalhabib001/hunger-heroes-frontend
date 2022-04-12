export class FoodRequestModel {
    address: string;
    imageLink: string;
    phoneNo: string;
    title: string;


    constructor(address: string, imageLink: string, phoneNo: string, title: string) {
        this.address = address;
        this.imageLink = imageLink;
        this.phoneNo = phoneNo;
        this.title = title;
    }


}
