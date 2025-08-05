import { NgFor, NgStyle } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { initFlowbite } from 'flowbite';
import { SearchComponent } from "../../commen/search/search.component";

@Component({
  selector: 'app-landing-page',
  imports: [RouterLink, NgFor, SearchComponent, NgStyle],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent implements OnInit {

  ngOnInit(): void {
       initFlowbite();
       this.startImageSlider();
  }

  scrollTo(sectionId: string) {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  benifitsList:string[]=[
    ' Local Platform',
    'Easy Booking Process',
    'Reliable Local Support',
    'Residential & Commercial Rentals',
    'Secure Listings',
    ' Simple, Transparent Process'
  ]
  guestList:string[]=[
      ' Explore a variety of listings to suit your budget and lifestyle.',
      'Reserve your stay securely with instant confirmation.',
      'Move in and relax—your space is ready when you are.',
      'Flexible cancellation',
      'Book instantly, and enjoy 24/7 support'
    ]
  hoststList:string[]=[
    'Earn More',
    'Receive secure payments after each confirmed booking.',
    'List Your Space',
    'Decide your rates and availability',
    ' Book instantly, and enjoy 24/7 support'
  ]
  
  serviceCard: Card[] = [
  {
    title: 'Fast Booking',
    description: 'Book your stay in seconds with our optimized system.',
    icon: '/assets/img/demo-image-1.jpg'
  },
  {
    title: 'second card',
    description: 'Get the best deals for a comfortable experience.',
    icon: '/assets/img/demo-image-1.jpg'
  },
  {
    title: 'Affordable Rates',
    description: ',Get the best deals for a comfortable experience.',
    icon: '/assets/img/demo-image-1.jpg'
  },
  
  {
    title: 'Affordable Rates',
    description: 'Get the best deals for a comfortable experience.',
    icon: '/assets/img/demo-image-1.jpg'
  }
];

faqList:faq[]=[
  {question:'Is Simple Rent free to use?',
    answer:'A: Browsing is free. Listing and booking may include service fees (shown during checkout).'
  },
  {question:'Do you verify listings?',
    answer:'A: Yes, we manually verify listings and offer support to ensure authenticity and safety.'
  },
  {question:'How do I list my property?',
    answer:'A: Just sign up, upload photos, enter details, and go live in minutes.'
  },
  {question:'Who can use Simple Rent?',
    answer:'A: Anyone looking to rent or list residential or commercial properties in Sri Lanka.'
  },
  {question:'What types of rentals are available?',
    answer:'A: Homes, apartments, workspaces, shops, venues, and more'
  }
]

 imageList: string[] = [
    'assets/img/beach.jpg',
    'assets/img/pexels-eslames.jpg',
    'assets/img/pexels-lighthouse.jpg',
    'assets/img/waterfall.jpg'
  ];
  currentImage: string = this.imageList[0];
  index: number = 0;


  startImageSlider(): void {
    setInterval(() => {
      this.index = (this.index + 1) % this.imageList.length;
      this.currentImage = this.imageList[this.index];
    }, 5000);
  }




  login() {

  }

}



interface Card {
  title: string;
  description: string;
  icon: string; 
}
interface faq{
  question:string,
  answer:string
}

