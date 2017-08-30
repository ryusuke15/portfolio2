import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { SkillsPageComponent } from './skills-page/skills-page.component';
import { WorkPageComponent } from './work-page/work-page.component';
import { ContactPageComponent, ContactDialog } from './contact-page/contact-page.component';
import { HomePageComponent } from './home-page/home-page.component';

import { ContactService } from './contact-page/contact.service';
import { HeaderService } from './header/header.service';
import { AppRoutingModule } from './app.routes';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutPageComponent,
    SkillsPageComponent,
    WorkPageComponent,
    ContactPageComponent,
    ContactDialog,
    HomePageComponent
  ],
  entryComponents: [ContactDialog],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule
],
  providers: [HeaderService],
  bootstrap: [AppComponent]
})
export class AppModule { }
