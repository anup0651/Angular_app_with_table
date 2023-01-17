import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDailogComponent } from './user-dialog.component';

describe('UserDailogComponent', () => {
  let component: UserDailogComponent;
  let fixture: ComponentFixture<UserDailogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserDailogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDailogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
