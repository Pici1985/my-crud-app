import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JustFieldsComponent } from './just-fields.component';

describe('JustFieldsComponent', () => {
  let component: JustFieldsComponent;
  let fixture: ComponentFixture<JustFieldsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JustFieldsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JustFieldsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
