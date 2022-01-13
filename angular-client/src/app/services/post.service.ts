import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {

   post$: Observable<any> | undefined;


  constructor( private http: HttpClient) 
              { }

  public async loadPostContent(id:any){
console.log("post", id);
    this.post$ = await this.http.get("http://localhost:4200/api/post/"+id, id)
    this.post$.subscribe(post1 => console.log(post1, "postcontent"))

    return this.post$
  }
}
