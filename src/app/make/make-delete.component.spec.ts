import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeDeleteComponent } from './make-delete.component';

describe('MakeDeleteComponent', () => {
  let component: MakeDeleteComponent;
  let fixture: ComponentFixture<MakeDeleteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeDeleteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
