import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuardGuard } from './guards/admin-guard.guard';
import { AdminHomeComponent } from './admin-home/admin-home.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { RegisterComponent } from './register/register.component';
import { LoginGuard } from './guards/login.guard';


const routes: Routes = [
  {path:'',component:LoginComponent},
    {path:'register', component:RegisterComponent},
  {path:'home', component:HomeComponent,canActivate:[LoginGuard]},
  {path:'admin', component:AdminHomeComponent,canActivate:[LoginGuard,AdminGuardGuard]},

  {path:'',redirectTo:'/login',pathMatch:'full'},
  
  {path:'**', component:NotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
