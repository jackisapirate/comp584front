import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardeleteComponent } from './cardelete.component';

describe('CardeleteComponent', () => {
  let component: CardeleteComponent;
  let fixture: ComponentFixture<CardeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
