import { Component, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginRequest} from '../../../models/AuthData';
import {  AuthServiceService } from '../../../services/auth-service.service';

@Component({
  selector: 'app-login-page',
  imports: [ReactiveFormsModule],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.css'
})
export class LoginPageComponent {

  private form_builder = inject(FormBuilder)
  private authService = inject(AuthServiceService)


  hide = signal(true);
  clickEvent(event: MouseEvent) {
    this.hide.set(!this.hide());
    event.stopPropagation();
  }

  loginForm = this.form_builder.group({
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]]
  });

  onLogin() {
    if (this.loginForm.valid) {
      const loginReq: LoginRequest = {
        username: this.loginForm.get('username')?.value as string,
        password: this.loginForm.get('password')?.value as string
      }
      console.log(loginReq);
      this.authService.login(loginReq);

    } else {
      alert("enter Useranme and Password");
    }
  }

}
