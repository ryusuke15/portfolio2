import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-skills-page',
  templateUrl: './skills-page.component.html',
  styleUrls: ['./skills-page.component.sass']
})
export class SkillsPageComponent implements OnInit {

  constructor(meta: Meta,
              title: Title){
    title.setTitle('Skills | Ryusuke Lavalla - fullstack freelance web developer');
    meta.addTags([
      {name: 'description', content:'I am a freelance full stack web developer based in Brooklyn, New York. Check out my digital portfolio.'}
    ]);
  }

  ngOnInit() {
    let top = document.querySelector('.page-format')
    top.scrollIntoView()
  }

}
