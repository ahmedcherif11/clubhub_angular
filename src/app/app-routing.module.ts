import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ProfilComponent } from './profil/profil.component';
import { FirstPageComponent } from './first-page/first-page.component';
import { LoginClubComponent } from './login-club/login-club.component';
import { MainLoginComponent } from './main-login/main-login.component';


const routes: Routes = [
  {path: '', redirectTo: '/login' , pathMatch:'full'},
  {path: 'login', component: MainLoginComponent},
  {path: 'home', component: HomeComponent},
  { path: 'ClubLogin', component: LoginClubComponent},
  { path: 'UserLogin', component: FirstPageComponent },
  // {path: '/create', component: CreatePostComponent},
 



];
export const ROUTING =RouterModule.forRoot(routes);

