import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import * as AOS from 'aos';
import { initFlowbite } from 'flowbite/lib/esm/components';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'simplerent';

  constructor() {
    AOS.init();

  }
  ngOnInit(): void {
    initFlowbite();
  }

}
