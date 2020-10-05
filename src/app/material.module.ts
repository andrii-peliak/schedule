import { NgModule } from '@angular/core';

import {MatToolbarModule} from "@angular/material/toolbar";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";

const exports = [
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
]

@NgModule({exports})
export class MaterialModule { }
