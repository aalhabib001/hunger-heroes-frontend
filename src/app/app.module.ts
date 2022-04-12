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
import {LoginComponent} from './auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {RegisterComponent} from './auth/register/register.component';
import {FooterComponent} from './footer/footer.component';
import {CountSectionComponent} from './home-page/count-section/count-section.component';
import {FoodRequestsComponent} from './food-requests/food-requests.component';
import {NotFoundComponent} from './not-found/not-found.component';
import {FoodCardComponent} from './food-requests/food-card/food-card.component';
import {SliderComponent} from './home-page/slider/slider.component';
import {OrganizationsComponent} from './organizations/organizations.component';
import {OrganizationCardComponent} from './organizations/organization-card/organization-card.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {CreateFoodRequestComponent} from './food-requests/create-food-request/create-food-request.component';
import {AuthService} from "./auth/auth.service";
import {AuthInterceptorService} from "./auth/auth-interceptor.service";

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
        FoodCardComponent,
        SliderComponent,
        OrganizationsComponent,
        OrganizationCardComponent,
        CreateFoodRequestComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        MDBBootstrapModule.forRoot(),
        ReactiveFormsModule,
        HttpClientModule,
        ToastrModule.forRoot(),
        BrowserAnimationsModule,
        FormsModule
    ],
    providers: [
        AuthService,
        {
            provide: HTTP_INTERCEPTORS,
            useClass: AuthInterceptorService,
            multi: true
        },
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
