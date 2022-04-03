import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GetApisComponent } from './get-apis/get-apis.component';
import { RandomUserComponent } from './random-user/random-user.component';
import { JustFieldsComponent } from './just-fields/just-fields.component';

const routes: Routes = [
  { path: 'apis', component: GetApisComponent },  
  { path: 'justfields', component: JustFieldsComponent },  
  { path: 'randomuser', component: RandomUserComponent }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
