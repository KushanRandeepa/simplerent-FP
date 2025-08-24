import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-customer-signup',
  imports: [ReactiveFormsModule],
  templateUrl: './customer-signup.component.html',
  styleUrl: './customer-signup.component.css'
})
export class CustomerSignupComponent {
 
  private http = inject(HttpClient);
  private _formBuilder = inject(FormBuilder);

  constructor(private router: Router) {}

  firstFormGroup = this._formBuilder.group({
    email: ['', [Validators.required, Validators.email], this.isExistedEmail.bind(this)],
  });

  isExistedEmail(control: FormControl): Promise<any> {
    return new Promise((resolve) => {
      setTimeout(() => {
        this.http.get<boolean>(`http://localhost:8080/auth/check-email/${control.value}`)
          .subscribe((res) => {
            if (res) {
              resolve({ emailExists: true });
            } else {
              resolve(null);
            }
          });
      }, 500);
    });
  }

  onSubmit() {
    if (this.firstFormGroup.valid) {
      const email = this.firstFormGroup.get('email')?.value;
      this.router.navigate(['/signup-with-email', email]);
    }
  }
}


