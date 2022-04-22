import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {OrganizationsModel} from "./organizations.model";
import {environment} from "../../environments/environment";
import {CreateOrganizationModel} from "./create-organization/create-organization.model";

@Injectable({
    providedIn: 'root'
})
export class OrganizationService {

    url = environment.urls.host + '/api/organizations';


    constructor(private http: HttpClient) {
    }

    getOrganizations() {
        return this.http.get<OrganizationsModel[]>(this.url);
    }

    createOrg(organization: CreateOrganizationModel) {
        return this.http.post<any>(this.url, organization);
    }

    deleteOrganization(orgId: number) {
        return this.http.delete<any>(this.url + '/' + orgId);
    }
}
