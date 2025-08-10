import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  imports: [],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent {
  isSearchOpen: boolean = false;
  constructor(private router: Router) {}
  search() {
    // Implement search functionality here
    console.log("Search initiated");
    this.isSearchOpen = true;
    this.router.navigate(['/products'], { queryParams: { search: 'your-search-term' } });
  }
} 
