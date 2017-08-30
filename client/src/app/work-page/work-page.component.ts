import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';

@Component({
  selector: 'app-work-page',
  templateUrl: './work-page.component.html',
  styleUrls: ['./work-page.component.sass']
})
export class WorkPageComponent implements OnInit {
  constructor(meta: Meta,
              title: Title){
    title.setTitle('Work | Ryusuke Lavalla - fullstack freelance web developer');
    meta.addTags([
      {name: 'description', content:'My contact details. Currently, I am available for hire.'}
    ])
  }

  ngOnInit() {
    let top = document.querySelector('.page-format')
    top.scrollIntoView()
  }

}
