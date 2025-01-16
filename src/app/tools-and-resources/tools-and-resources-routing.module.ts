import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolsAndResourcesComponent } from './tools-and-resources.component';

const routes: Routes = [{ path: '', component: ToolsAndResourcesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ToolsAndResourcesRoutingModule { }
