import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  home: boolean

  constructor(private router: Router,
              private location: Location) { 
              
    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.home = false
      } else {
        this.home = true
      }
    });
  }

  ngOnInit() {
  }
 
}
