import {Component, Input, OnInit} from '@angular/core';
import {OrganizationsModel} from "../organizations.model";
import {AuthService} from "../../auth/auth.service";
import {OrganizationService} from "../organization.service";
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";

@Component({
    selector: 'app-organization-card',
    templateUrl: './organization-card.component.html',
    styleUrls: ['./organization-card.component.css']
})
export class OrganizationCardComponent implements OnInit {

    // @ts-ignore
    @Input() organization: OrganizationsModel;
    isAdmin: boolean = false;

    constructor(private _authService: AuthService,
                private _orgService: OrganizationService,
                private _toaster: ToastrService,
                private _router: Router) {
        this._authService.isAdmin.subscribe(
            (isAdmin: boolean) => {
                this.isAdmin = isAdmin;
            }
        );
    }

    ngOnInit(): void {
    }

    deleteOrganization(orgId: number) {
        this._orgService.deleteOrganization(orgId).subscribe(
            (response) => {
                this._toaster.error('Organization deleted successfully', 'Deleted');
            }
        );
    }
}
