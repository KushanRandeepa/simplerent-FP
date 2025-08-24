import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterLink, ActivatedRoute } from '@angular/router';
import { FormBuilder, Validators, FormsModule, ReactiveFormsModule, FormControl, NonNullableFormBuilder } from '@angular/forms';

@Component({
  selector: 'app-sign-up-with-email',
  imports: [],
  templateUrl: './sign-up-with-email.component.html',
  styleUrl: './sign-up-with-email.component.css'
})
export class SignUpWithEmailComponent implements OnInit {

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
  // bypassService = inject(AuthBypassService)
  userRole = 'STUDENT';

  onSubmit() {
    alert('Profile updated successfully!');
    this.route.navigate(['/']);
  }

  firstFormGroup = this._formBuilder.group({
    email: ['', ],
    newPassword: ['', [Validators.required, Validators.minLength(6), Validators.pattern("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).{6,}$")]],
    confirmPassword: ['', [Validators.required], this.isConfirmPassword.bind(this)]
  });


 isConfirmPassword(control: FormControl): Promise<any> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (this.firstFormGroup.get('newPassword')?.value === control.value) {
          resolve(null);
        } else {
          resolve({ passwordMismatch: true });
        }
      }, 1000);
    });
  }

}
