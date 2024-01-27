import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecuperadoComponent } from './recuperado.component';

describe('RecuperadoComponent', () => {
  let component: RecuperadoComponent;
  let fixture: ComponentFixture<RecuperadoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecuperadoComponent]
    });
    fixture = TestBed.createComponent(RecuperadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
