import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopByMetalComponent } from './shop-by-metal.component';

describe('ShopByMetalComponent', () => {
  let component: ShopByMetalComponent;
  let fixture: ComponentFixture<ShopByMetalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShopByMetalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopByMetalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
