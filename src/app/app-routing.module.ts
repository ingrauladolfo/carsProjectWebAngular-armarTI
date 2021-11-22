import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageComponent } from './components/main-page/main-page.component';
import { AddCarComponent } from './components/add-car/add-car.component';

const routes: Routes = [
  {path:'', component:MainPageComponent},
  {path:'add-car',component:AddCarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
