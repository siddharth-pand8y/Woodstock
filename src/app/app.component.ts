import { Component } from '@angular/core';
import { environment } from '../environments/environment';

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
      price: 44.50,
      discount: 0,
      image: this.bucketUrl + 'products/product-2.png',
    },
    {
      name: 'OFFICE CHAIR SET',
      price: 200.50,
      discount: 50.10,
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
      price: 50.00,
      discount: 0,
      image: this.bucketUrl + 'products/product-6.png',
    }
  ];
  changeActiveTab(index: number) {
    this.selectedTab = index;
  }
}
