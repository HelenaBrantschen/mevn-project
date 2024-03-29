import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {HttpService} from "../../services/http.service";
import { GalleryComponentService } from 'src/app/services/gallery.component.service';
import { Router } from '@angular/router'; 
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss']
})
export class GalleryComponent implements OnInit {

  posts$: Observable<any> | undefined;

  constructor(
    private httpService: HttpService,
    private service: GalleryComponentService,
    private router: Router
    ) { }

  async ngOnInit(): Promise<void> {
    this.posts$ = await this.httpService.loadPosts();

    this.posts$.subscribe(value => console.log(value))
  }
  public onClickPost(id: any) {
    this.router.navigate(["/post", id])
  }
}

