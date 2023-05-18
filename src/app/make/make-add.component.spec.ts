import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeAddComponent } from './make-add.component';

describe('MakeAddComponent', () => {
  let component: MakeAddComponent;
  let fixture: ComponentFixture<MakeAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MakeAddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MakeAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
