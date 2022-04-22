import { Component, OnInit } from '@angular/core';
import {CreateOrganizationModel} from "./create-organization.model";
import {FileUploadService} from "../../shared/service/file-upload.service";
import {OrganizationService} from "../organization.service";
import {Router} from "@angular/router";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-create-organization',
  templateUrl: './create-organization.component.html',
  styleUrls: ['./create-organization.component.css']
})
export class CreateOrganizationComponent implements OnInit {

  // @ts-ignore
  organization: CreateOrganizationModel = {};
  uploading: boolean = false;

  constructor(private _fileUploadService: FileUploadService,
              private _organizationService: OrganizationService,
              private _router: Router,
              private _toaster: ToastrService) { }

  ngOnInit(): void {
  }

  uploadFile(file: Event) {
    // @ts-ignore
    let image: File = (file.target as HTMLInputElement).files[0];

    // console.log(image);

    this.uploading = true;
    this._fileUploadService.upload(image).subscribe(
        res => {

          this.organization.orgImageLink = res.data.url;
          this.uploading = false;
        },
        error => {
          console.log(error);
          this.uploading = false;
        }
    )
  }

  onSubmit() {
    this._organizationService.createOrg(this.organization).subscribe(
        res => {
            this._toaster.success('Organization created successfully', 'Success');
          this._router.navigate(['/organizations']);
        },
        error => {
          console.log(error);
        }
    )
  }
}
