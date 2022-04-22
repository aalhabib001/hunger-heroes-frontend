import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ContactComponent} from "./contact/contact.component";
import {LoginComponent} from "./auth/login/login.component";
import {RegisterComponent} from "./auth/register/register.component";
import {FoodRequestsComponent} from "./food-requests/food-requests.component";
import {NotFoundComponent} from "./not-found/not-found.component";
import {OrganizationsComponent} from "./organizations/organizations.component";
import {CreateFoodRequestComponent} from "./food-requests/create-food-request/create-food-request.component";
import {CreateOrganizationComponent} from "./organizations/create-organization/create-organization.component";

const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomePageComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'food-requests', component: FoodRequestsComponent},
    {path: 'food-requests/admin', component: FoodRequestsComponent},
    {path: 'food-requests/add', component: CreateFoodRequestComponent},
    {path: 'organizations', component: OrganizationsComponent},
    {path: 'organizations/add', component: CreateOrganizationComponent},
    {path: '**', component: NotFoundComponent},
    // {path: 'shopping-list', component: ShoppingListComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
