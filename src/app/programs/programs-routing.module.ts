import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArraysComponent } from './arrays/arrays.component';

const routes: Routes = [
  {path : '', component : ArraysComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProgramsRoutingModule { }
