import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnadirTransportistaComponent } from './anadir-transportista.component';

describe('AnadirTransportistaComponent', () => {
  let component: AnadirTransportistaComponent;
  let fixture: ComponentFixture<AnadirTransportistaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnadirTransportistaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnadirTransportistaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
