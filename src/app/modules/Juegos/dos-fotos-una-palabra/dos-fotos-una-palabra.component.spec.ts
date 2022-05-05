import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DosFotosUnaPalabraComponent } from './dos-fotos-una-palabra.component';

describe('DosFotosUnaPalabraComponent', () => {
  let component: DosFotosUnaPalabraComponent;
  let fixture: ComponentFixture<DosFotosUnaPalabraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DosFotosUnaPalabraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DosFotosUnaPalabraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
