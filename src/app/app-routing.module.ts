import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./features/home/home.component";
import { LoginComponent } from "./features/login/login.component";
import { DashboardComponent } from "./features/dashboard/dashboard.component";

const routes: Routes = [
    {path: '', redirectTo: '/home', pathMatch: 'full'}, // para direcionar par Home
    {path: 'home', component:HomeComponent},
    {path: 'login', component: LoginComponent},
    {path: 'dashboard', component:DashboardComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

