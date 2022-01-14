import { PostComponent } from './components/post/post.component';
import { GalleryComponent } from './components/gallery/gallery.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: GalleryComponent},
  {path: 'post/:id', component: PostComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {  }
