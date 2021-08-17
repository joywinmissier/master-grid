import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLibDemoComponent } from './new-lib-demo.component';

describe('NewLibDemoComponent', () => {
  let component: NewLibDemoComponent;
  let fixture: ComponentFixture<NewLibDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewLibDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLibDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
