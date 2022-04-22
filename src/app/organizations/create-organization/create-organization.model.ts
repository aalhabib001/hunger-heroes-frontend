export class CreateOrganizationModel {
    orgAddress:     string;
    orgDescription: string;
    orgImageLink:   string;
    orgName:        string;
    orgPhone:       string;
    orgWebsite:     string;


    constructor(orgAddress: string, orgDescription: string, orgImageLink: string, orgName: string, orgPhone: string, orgWebsite: string) {
        this.orgAddress = orgAddress;
        this.orgDescription = orgDescription;
        this.orgImageLink = orgImageLink;
        this.orgName = orgName;
        this.orgPhone = orgPhone;
        this.orgWebsite = orgWebsite;
    }
}
