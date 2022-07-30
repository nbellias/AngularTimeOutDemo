import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TimeOutPageComponent } from './time-out-page/time-out-page.component';

const routes: Routes = [
  { path: '', component: TimeOutPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
