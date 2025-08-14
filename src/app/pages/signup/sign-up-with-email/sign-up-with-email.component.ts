import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-sign-up-with-email',
  imports: [],
  templateUrl: './sign-up-with-email.component.html',
  styleUrl: './sign-up-with-email.component.css'
})
export class SignUpWithEmailComponent {

  constructor(private router:Router){}

  onSubmit() {
    alert('Profile updated successfully!');
    this.router.navigate(['/']);
  }
}
