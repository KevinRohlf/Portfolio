import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { IAmComponent } from './i-am/i-am.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { MySkillsComponent } from './my-skills/my-skills.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
// import { ScrollSpyDirective } from './scroll-spy.directive';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import { ImprintComponent } from './imprint/imprint.component';
import { MainsiteComponent } from './mainsite/mainsite.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    IAmComponent,
    AboutMeComponent,
    MySkillsComponent,
    PortfolioComponent,
    // ScrollSpyDirective,
    ContactComponent,
    FooterComponent,
    ImprintComponent,
    MainsiteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
