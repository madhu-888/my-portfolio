import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutPageComponent } from './components/about-page/about-page.component';
import { ContactPageComponent } from './components/contact-page/contact-page.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { SkillsPageComponent } from './components/skills-page/skills-page.component';

const routes: Routes = [
  {path:'', redirectTo:'/home-page', pathMatch:'full'},
  {path:'home-page',component: HomePageComponent},
  {path:'about-page', component: AboutPageComponent},
  {path:'skills-page', component: SkillsPageComponent},
  {path:'contact-page', component: ContactPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents=[
  HomePageComponent,
  AboutPageComponent,
  SkillsPageComponent,
  ContactPageComponent
]
