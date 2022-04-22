export class OrganizationsModel {
    createdBy:      string;
    createdOn:      Date;
    id:             number;
    isDeleted:      boolean;
    orgAddress:     string;
    orgDescription: string;
    orgImageLink:   string;
    orgName:        string;
    orgPhone:       string;
    orgWebsite:     string;
    updatedBy:      string;
    updatedOn:      Date;
    uuid:           string;


    constructor(createdBy: string, createdOn: Date, id: number, isDeleted: boolean, orgAddress: string, orgDescription: string,
                orgImageLink: string, orgName: string, orgPhone: string, orgWebsite: string, updatedBy: string,
                updatedOn: Date, uuid: string) {

        this.createdBy = createdBy;
        this.createdOn = createdOn;
        this.id = id;
        this.isDeleted = isDeleted;
        this.orgAddress = orgAddress;
        this.orgDescription = orgDescription;
        this.orgImageLink = orgImageLink;
        this.orgName = orgName;
        this.orgPhone = orgPhone;
        this.orgWebsite = orgWebsite;
        this.updatedBy = updatedBy;
        this.updatedOn = updatedOn;
        this.uuid = uuid;
    }
}
