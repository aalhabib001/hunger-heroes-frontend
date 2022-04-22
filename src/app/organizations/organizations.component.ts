import {Component, OnInit} from '@angular/core';
import {OrganizationsModel} from "./organizations.model";
import {organizationFakeData} from "./OrganizationFakeData";
import {OrganizationService} from "./organization.service";

@Component({
    selector: 'app-organizations',
    templateUrl: './organizations.component.html',
    styleUrls: ['./organizations.component.css']
})
export class OrganizationsComponent implements OnInit {

    // @ts-ignore
    organizations: OrganizationsModel[];

    constructor(private _organizationService: OrganizationService) {
    }

    ngOnInit(): void {
        this._organizationService.getOrganizations().subscribe(
            (organizations: OrganizationsModel[]) => {
                this.organizations = organizations;
            }
        );
    }


}
