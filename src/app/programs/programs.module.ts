import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProgramsRoutingModule } from './programs-routing.module';
import { ArraysComponent } from './arrays/arrays.component';


@NgModule({
  declarations: [
    ArraysComponent
  ],
  imports: [
    CommonModule,
    ProgramsRoutingModule
  ]
})
export class ProgramsModule { }
