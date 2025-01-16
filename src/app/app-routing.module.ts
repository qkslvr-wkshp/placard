import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
  {
    path: 'about',
    loadChildren: () =>
      import('./about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then((m) => m.HomeModule),
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'join', loadChildren: () => import('./join/join.module').then(m => m.JoinModule) },
  { path: 'book', loadChildren: () => import('./book/book.module').then(m => m.BookModule) },
  { path: 'blog', loadChildren: () => import('./blog/blog.module').then(m => m.BlogModule) },
  { path: 'tools-and-resources', loadChildren: () => import('./tools-and-resources/tools-and-resources.module').then(m => m.ToolsAndResourcesModule) },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
