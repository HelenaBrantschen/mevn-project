import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpService} from "../../services/http.service";

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  posts$: Observable<any> | undefined;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.posts$ = this.httpService.loadPosts();
  }

}
