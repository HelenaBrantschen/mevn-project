import { PostService } from './../../services/post.service';
import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent {

  id:any  
  constructor( 
    private service : PostService,
    private route: ActivatedRoute,
    private router : Router,

    ){}
  public post: any;

  async ngOnInit(): Promise<void> {
  const routeParams = this.route.snapshot.paramMap;
  this.id= routeParams.get('id');


     var post$ = await this.service.loadPostContent(this.id);
     post$.subscribe(data => {
     


      this.post = {...data, dates:this.splitDate(data), category:this.parseCategory(data)};
    })}  
    
  public onClickIconGallery(){
    this.router.navigate([""]);
  }

  savePost(){
  };
  splitDate(data:any){
    if(data.dates?.length){
      return  [data.dates[0].split("-")[0], data.dates[0].split("-")[1]]
    }
return[];
  }
  parseCategory(data:any){
      return JSON.parse(data.category)

  }
}

