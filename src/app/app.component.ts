import { Component, OnInit } from '@angular/core';
import { environment } from '../environments/environment';
import { scaleIn, scaleOut } from './animations/animations';
import { trigger, transition, useAnimation } from '@angular/animations';

interface productSchema {
  name: string;
  price: number;
  discount: number;
  image: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [
    trigger('slideAnimation', [
      /* scale */
      transition('void => *', [
        useAnimation(scaleIn, { params: { time: '500ms' } }),
      ]),
      transition('* => void', [
        useAnimation(scaleOut, { params: { time: '500ms' } }),
      ]),
    ]),
  ],
})
export class AppComponent {
  title = 'woodstock';
  selectedTab = 1;
  bucketUrl = environment.bucketUrl;
  products: productSchema[] = [
    {
      name: 'RACING GAMING CHAIR',
      price: 23.45,
      discount: 0,
      image: this.bucketUrl + 'products/product-1.png',
    },
    {
      name: 'MODERN WOOD SOFA',
      price: 44.5,
      discount: 0,
      image: this.bucketUrl + 'products/product-2.png',
    },
    {
      name: 'OFFICE CHAIR SET',
      price: 200.5,
      discount: 50.1,
      image: this.bucketUrl + 'products/product-3.png',
    },
    {
      name: 'GLASS TABLE',
      price: 20.34,
      discount: 0,
      image: this.bucketUrl + 'products/product-4.png',
    },
    {
      name: 'WOODEN CABINET',
      price: 98.65,
      discount: 0,
      image: this.bucketUrl + 'products/product-5.png',
    },
    {
      name: 'RED CUSHION SOFT',
      price: 50.0,
      discount: 0,
      image: this.bucketUrl + 'products/product-6.png',
    },
  ];
  carouselImages = [
    { src: 'https://woodstock.s3.ap-south-1.amazonaws.com/Landing-Page.jpg' },
    {
      src:
        'https://woodstock.s3.ap-south-1.amazonaws.com/landing-page/Landing-Page-1.jpg',
    },
    {
      src:
        'https://woodstock.s3.ap-south-1.amazonaws.com/landing-page/Landing-Page-2.jpg',
    },
    {
      src:
        'https://woodstock.s3.ap-south-1.amazonaws.com/landing-page/Landing-Page-3.jpg',
    },
  ];
  activeImage = 0;

  constructor() {
    setInterval(() => {
      this.changeImage('next');
    }, 5000);
  }

  changeImage(direction: string) {
    if (direction === 'next') {
      this.activeImage =
        this.activeImage < this.carouselImages.length - 1
          ? ++this.activeImage
          : 0;
    } else {
      this.activeImage =
        this.activeImage === 0
          ? this.carouselImages.length - 1
          : --this.activeImage;
    }
  }
  changeActiveTab(index: number) {
    this.selectedTab = index;
  }
}
