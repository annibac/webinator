import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserSexComponent } from './user-sex.component';

describe('UserSexComponent', () => {
  let component: UserSexComponent;
  let fixture: ComponentFixture<UserSexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserSexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserSexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
