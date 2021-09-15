export class FoodRequestModel {
    public id: number;
    public title: string;
    public name: string;
    public address: string;
    public time: string;
    public contact: string;
    public image: string;


    constructor(id: number, title: string, name: string, address: string, time: string, contact: string, image: string) {
        this.id = id;
        this.title = title;
        this.name = name;
        this.address = address;
        this.time = time;
        this.contact = contact;
        this.image = image;
    }
}
