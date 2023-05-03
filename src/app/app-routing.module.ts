import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainsiteComponent } from './mainsite/mainsite.component';
import { ImprintComponent } from './imprint/imprint.component';

const routes: Routes = [
  { path: '', component: MainsiteComponent},
  { path: 'imprint', component: ImprintComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
