import { TestBed } from '@angular/core/testing';
import { GalleryComponentService } from './gallery.component.service';

describe('Gallery.ComponentService', () => {
  let service: GalleryComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GalleryComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});