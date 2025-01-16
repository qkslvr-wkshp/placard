import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ToolsAndResourcesRoutingModule } from './tools-and-resources-routing.module';
import { ToolsAndResourcesComponent } from './tools-and-resources.component';


@NgModule({
  declarations: [
    ToolsAndResourcesComponent
  ],
  imports: [
    CommonModule,
    ToolsAndResourcesRoutingModule
  ]
})
export class ToolsAndResourcesModule { }
