import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BirthdayHome } from './birthday-home';

describe('BirthdayHome', () => {
  let component: BirthdayHome;
  let fixture: ComponentFixture<BirthdayHome>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BirthdayHome]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BirthdayHome);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
