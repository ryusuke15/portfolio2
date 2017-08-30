import { Component } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { Meta } from '@angular/platform-browser';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  background: string
  opacity: number
  constructor(private router: Router,
              private meta: Meta,
              private location: Location){

    meta.addTags([
      {name: 'keywords', content: 'Full Stack Developer, Freelance, Programmer'},
      {name: 'author', content: 'ryusukelavalla.com'},
    ]);

    router.events.subscribe((val) => {
      if(location.path() != ''){
        this.background = 'white'
        this.opacity = 0.8
      } else {
        this.background = 'transparent'
        this.opacity = 0.6
      }
    });
  }
}
