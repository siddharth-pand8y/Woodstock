import { Component, OnInit, Input } from '@angular/core';
import {environment } from '../../environments/environment';

@Component({
  selector: 'discount-sales-widget',
  templateUrl: './discount-sales-widget.component.html',
  styleUrls: ['./discount-sales-widget.component.scss'],
})
export class DiscountSalesWidgetComponent implements OnInit {
  @Input() promoType: string = '';
  @Input() promoTitle: string = '';
  @Input() promoAction: string = '';
  @Input() promoImage: string = '';
  @Input() backgroundColor: string = '';
  @Input() textColor: String = '';
  bucketUrl: string;

  constructor() {
    this.bucketUrl = environment.bucketUrl;

  }

  ngOnInit(): void {

  }
}
