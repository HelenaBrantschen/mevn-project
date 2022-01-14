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
  }

  showExistingPost(id: any) {
  }
    
  showGallery(){
  }

}
