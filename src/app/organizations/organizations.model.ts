export class OrganizationsModel {
    public name: string;
    public logo: string;
    public webLink: string;

    constructor(name: string, logo: string, webLink: string) {
        this.name = name;
        this.logo = logo;
        this.webLink = webLink;
    }
}
