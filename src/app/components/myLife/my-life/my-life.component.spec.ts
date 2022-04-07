import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MyLifeComponent } from './my-life.component';

describe('MyLifeComponent', () => {
  let component: MyLifeComponent;
  let fixture: ComponentFixture<MyLifeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MyLifeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MyLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
