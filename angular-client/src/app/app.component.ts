import { Component, OnInit, OnDestroy } from '@angular/core';
import { GalleryComponentService } from './services/gallery.component.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-client';

  showgallery = true;
  shownav = true;
  showpost = false;
  postId = "";

  constructor(
    private galleryService: GalleryComponentService
  ) {}

  async ngOnInit(): Promise<void> {
    this.galleryService
      .showExistingPost$
      .subscribe((id) => this.showExistingPost(id));
  }

  /*ngOnDestroy() {
    this.galleryService
    .showExistingPost$.unsubscribe()
  };*/

  showExistingPost(id: any) {
    this.showgallery = false;
    this.shownav = false;
    this.showpost = true;
    this.postId = id;
    console.log("ID", this.postId)
  }
    
  showGallery(){
    this.showgallery = true;
    this.shownav = true;
    this.showpost = false;
  }

}
