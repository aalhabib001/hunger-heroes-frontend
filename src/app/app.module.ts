import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomePageComponent} from './home-page/home-page.component';
import {HeaderComponent} from './header/header.component';
import {MDBBootstrapModule} from "angular-bootstrap-md";
import {FirstSectionComponent} from './home-page/first-section/first-section.component';
import {InfoCardComponent} from './home-page/first-section/info-card/info-card.component';
import {ContactComponent} from './contact/contact.component';
import {LoginComponent} from './login/login.component';
import {ReactiveFormsModule} from "@angular/forms";
import {RegisterComponent} from './register/register.component';
import {FooterComponent} from './footer/footer.component';
import { CountSectionComponent } from './home-page/count-section/count-section.component';
import { FoodRequestsComponent } from './food-requests/food-requests.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FoodCardComponent } from './food-requests/food-card/food-card.component';

@NgModule({
    declarations: [
        AppComponent,
        HomePageComponent,
        HeaderComponent,
        FirstSectionComponent,
        InfoCardComponent,
        ContactComponent,
        LoginComponent,
        RegisterComponent,
        FooterComponent,
        CountSectionComponent,
        FoodRequestsComponent,
        NotFoundComponent,
        FoodCardComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
        ReactiveFormsModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
