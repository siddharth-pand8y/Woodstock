import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscountSalesWidgetComponent } from './discount-sales-widget.component';

describe('DiscountSalesWidgetComponent', () => {
  let component: DiscountSalesWidgetComponent;
  let fixture: ComponentFixture<DiscountSalesWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DiscountSalesWidgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscountSalesWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
