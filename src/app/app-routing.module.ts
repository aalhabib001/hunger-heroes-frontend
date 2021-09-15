import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomePageComponent} from "./home-page/home-page.component";
import {ContactComponent} from "./contact/contact.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {FoodRequestsComponent} from "./food-requests/food-requests.component";
import {NotFoundComponent} from "./not-found/not-found.component";

const routes: Routes = [
    {path: '', pathMatch: 'full', component: HomePageComponent},
    {path: 'contact', component: ContactComponent},
    {path: 'login', component: LoginComponent},
    {path: 'register', component: RegisterComponent},
    {path: 'food-requests', component: FoodRequestsComponent},
    {path: '**', component: NotFoundComponent},
    // {path: 'shopping-list', component: ShoppingListComponent},
]

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {
}
