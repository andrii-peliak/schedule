import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MainComponent} from "./main/main.component";
import { ToolbarComponent } from './toolbar/toolbar.component';
import {SharedModule} from "../_shared/shared.module";



@NgModule({
  declarations: [MainComponent, ToolbarComponent],
  imports: [CommonModule, SharedModule],
  exports: [MainComponent]
})
export class MainModule { }
