import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LibProfitlossComponent } from './lib-profitloss.component';

describe('LibProfitlossComponent', () => {
  let component: LibProfitlossComponent;
  let fixture: ComponentFixture<LibProfitlossComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LibProfitlossComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LibProfitlossComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
