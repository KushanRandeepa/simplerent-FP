import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl, NonNullableFormBuilder } from '@angular/forms';
import { SignupRequest } from '../../../models/AuthData';
import { AuthBypassService } from '../../../services/auth-bypass.service';
import { IDeactivateGuard } from '../../../services/guards/deactivateGuardService';

@Component({
  selector: 'app-sign-up-with-email',
  imports: [ReactiveFormsModule,FormsModule],
  templateUrl: './sign-up-with-email.component.html',
  styleUrl: './sign-up-with-email.component.css'
})
export class SignUpWithEmailComponent implements OnInit, IDeactivateGuard {

  private readonly http = inject(HttpClient);
  private _formBuilder = inject(FormBuilder);

  route = inject(Router)
  activatedRoute = inject(ActivatedRoute);

  ngOnInit() {
    const email = this.activatedRoute.snapshot.paramMap.get('userEmail');
    if (email) {
      this.firstFormGroup.patchValue({ email });
    
    }
  }
  
  bypassService = inject(AuthBypassService)
  userRole = 'ADMIN';

   canDeactivate(): boolean {
    return confirm(' Are you sure you want to leave .');
  }



  firstFormGroup = this._formBuilder.group({
    email: ['', ],
    newPassword: ['', [Validators.required, Validators.minLength(6), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{6,}$")]],
    confirmPassword: ['', [Validators.required], this.isConfirmPassword.bind(this)]
  });


 isConfirmPassword(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.firstFormGroup.get('newPassword')?.value == control.value) {
          resolve(null);
        } else {
          resolve({ passwordMismatch: true });
        }
      }, 1000);
    });
  }




  onSubmit() {
    console.log(this.firstFormGroup.get('email')?.value as string)
    if (this.firstFormGroup.valid ) {
      console.log(this.firstFormGroup.valid)
      const signupRequest: SignupRequest = {
        email: this.firstFormGroup.get('email')?.value as string,
        password: this.firstFormGroup.get('newPassword')?.value as string,
        role: this.userRole,
      };
      console.log(signupRequest)
      this.http.post<boolean>('http://localhost:8080/auth/signup', signupRequest).subscribe({
        next: (res) => {
            alert('Registration successful!');
            this.firstFormGroup.reset();
            this.bypassService.bypassGuard = true;
            this.route.navigateByUrl('/login');
         
        },error: (error) => {
          console.error(error);
          alert('Registration failed. Please try again.');
        }
    })
    } else {
      alert('Please fill in all required fields correctly.');
    }
  }




}
