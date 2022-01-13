import { Router, RouterModule } from '@angular/router';
import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) 
              { }

  async loadPosts() {
    var test = await this.http.get("http://localhost:5000/api/post");
    return test
  }
  
  savePost(formData: FormData) {
    var post = this.http.post("http://localhost:5000/api/post", formData).subscribe();
    return post
  }
}
