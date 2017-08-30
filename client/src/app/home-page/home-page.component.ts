import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.sass']
})
export class HomePageComponent implements OnInit {
  constructor(meta: Meta,
              title: Title){
    title.setTitle('Ryusuke Lavalla - fullstack freelance web developer');
    meta.addTags([
      {name: 'description', content:'I am a freelance full stack web developer based in Brooklyn, New York. Check out my digital portfolio.'}
    ])
  }

  ngOnInit() {
  }


}
