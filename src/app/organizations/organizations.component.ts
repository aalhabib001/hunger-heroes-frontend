import {Component, OnInit} from '@angular/core';
import {OrganizationsModel} from "./organizations.model";
import {organizationFakeData} from "./OrganizationFakeData";

@Component({
    selector: 'app-organizations',
    templateUrl: './organizations.component.html',
    styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

    // @ts-ignore
    organizations: OrganizationsModel[];

    constructor() {
        this.organizations = organizationFakeData;
    }

    ngOnInit(): void {
    }

}
