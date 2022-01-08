import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GalleryComponentService {
  private showExistingPostSource = new Subject<string>();
  public showExistingPost$ = this.showExistingPostSource.asObservable();

  public onClickPost(id: any) {
    this.showExistingPostSource.next(id);
  }
}
