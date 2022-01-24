import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LoginComponent } from './login.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  TuiNotification,
  TuiNotificationsService,
  TuiTextfieldControllerModule,
} from '@taiga-ui/core';
import { of, throwError } from 'rxjs';
import { RouterTestingModule } from '@angular/router/testing';
import { TuiInputModule, TuiInputPasswordModule } from '@taiga-ui/kit';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

class MockAuthService {
  login() {}
}

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let notifMock: TuiNotificationsService;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        TuiInputModule,
        TuiInputPasswordModule,
        TuiTextfieldControllerModule,
      ],
      providers: [
        {
          useClass: MockAuthService,
        },
      ],
    }).compileComponents();

    notifMock = TestBed.inject(TuiNotificationsService);

    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should initialize form's inputs to null", () => {
    expect(component.form.value).toEqual({ username: null, password: null });
  });

  it('should have username and password required', () => {
    component.form.patchValue({ username: null, password: null });
    expect(component.form.invalid).toBeTrue();
    component.form.patchValue({ username: 'bob', password: '1234' });
    expect(component.form.invalid).toBeFalse();
  });

  describe('submit', () => {
    it('should show an error notification when form is invalid', () => {
      const notifSpy = spyOn(notifMock, 'show').and.returnValue(of(false));
      component.form.patchValue({ username: 'bob', password: null });

      component.submit();

      expect(notifSpy).toHaveBeenCalledTimes(1);
      expect(notifSpy.calls.argsFor(0)[1].status).toBe(TuiNotification.Warning);
    });
  });
});
