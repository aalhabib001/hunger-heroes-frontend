import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-first-section',
    templateUrl: './first-section.component.html',
    styleUrls: ['./first-section.component.css']
})
export class FirstSectionComponent implements OnInit {

    cardDataList = [
        {
            title: "Food Requests",
            iconLink: '../../../assets/icons/clipboard.svg'
        },
        {
            title: "Create New Request",
            iconLink: '../../../assets/icons/add.svg'
        },
        {
            title: "Organization List",
            iconLink: '../../../assets/icons/secure.svg'
        },
        {
            title: "Contact with us",
            iconLink: '../../../assets/icons/share.svg'
        },
    ]

    constructor() {
    }

    ngOnInit(): void {
    }

}
