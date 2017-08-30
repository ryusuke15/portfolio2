import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
@Component({
  selector: 'app-about-page',
  templateUrl: './about-page.component.html',
  styleUrls: ['./about-page.component.sass']
})
export class AboutPageComponent implements OnInit {

  constructor(meta: Meta,
              title: Title){
    title.setTitle('About | Ryusuke Lavalla - fullstack freelance web developer');
    meta.addTags([
      {name: 'description', content:'Full Stack Developer. Working as a freelancer,specialized in Angular and Django.'}
    ]);
  }

  ngOnInit() {
    let top = document.querySelector('.page-format')
    top.scrollIntoView()
  }

}
