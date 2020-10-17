import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MaterialModule} from "../material.module";
import {RouterModule} from "@angular/router";
import {PerfectScrollbarModule} from "ngx-perfect-scrollbar";
import {NgxMaterialTimepickerModule} from "ngx-material-timepicker";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {LayoutModule} from "@angular/cdk/layout";

const sharedModules = [MaterialModule, RouterModule, PerfectScrollbarModule, NgxMaterialTimepickerModule, FormsModule, ReactiveFormsModule, LayoutModule]

@NgModule({
  declarations: [],
  imports: [CommonModule, ...sharedModules],
  exports: [...sharedModules]
})
export class SharedModule { }
