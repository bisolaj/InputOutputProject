import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartTxtComponent } from './cart-txt.component';

describe('CartTxtComponent', () => {
  let component: CartTxtComponent;
  let fixture: ComponentFixture<CartTxtComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartTxtComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartTxtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
