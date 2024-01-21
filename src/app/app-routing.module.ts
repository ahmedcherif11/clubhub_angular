import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreatePostComponent } from './create-post/create-post.component';
import { ProfilComponent } from './profil/profil.component';
import { FirstPageComponent } from './first-page/first-page.component';


const routes: Routes = [
  {path: '', redirectTo: '/firstpage' , pathMatch:'full'},
  {path: '/firstpage', component: FirstPageComponent},
  {path: '/home', component: HomeComponent},
  {path: '/create', component: CreatePostComponent},
 



];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
