import { Component, OnInit } from '@angular/core';
import { GalleryComponentService } from './components/gallery/gallery.component.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'angular-client';
  showgallery = true;
  shownav = false;
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

  showExistingPost(id: any) {
    this.showgallery = false;
    this.shownav = false;
    this.showpost = true;
    this.postId = id;
    console.log("ID", this.postId)
  }
}
