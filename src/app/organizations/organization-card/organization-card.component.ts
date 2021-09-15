import {Component, Input, OnInit} from '@angular/core';
import {OrganizationsModel} from "../organizations.model";

@Component({
    selector: 'app-organization-card',
    templateUrl: './organization-card.component.html',
    styleUrls: ['./organization-card.component.css']
})
export class OrganizationCardComponent implements OnInit {

    // @ts-ignore
    @Input() organization: OrganizationsModel;

    constructor() {
    }

    ngOnInit(): void {
    }

}
