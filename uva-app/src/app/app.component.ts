import { Component } from '@angular/core';
import { ImageService } from './ImageService';

export interface slider {
  image: string,
  thumbImage: string,
  title: string
};

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'uva-app';
  imageObject: Array<slider> = [];

  constructor(private heroService: ImageService) {
    this.setImageObject();
  }

  setImageObject() {
    this.heroService.getImages().subscribe((data: any) => {
      this.imageObject = data;
    });
  }

  imageClickHandler(e: any) {
    console.log(e);
  }
}
