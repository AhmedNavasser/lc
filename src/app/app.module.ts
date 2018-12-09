import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { MaterilDesign } from 'src/shared/material-design';
import { HeaderComponent } from './header/header.component';
import { LaleCardComponent } from './lale-card/lale-card.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule } from '@angular/forms';
import { ParticlesModule } from 'angular-particle';
import { ChangeThemeService } from './services/change-theme.service';
import { FooterComponent } from './footer/footer.component';
import {FlexLayoutModule} from '@angular/flex-layout';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LaleCardComponent,
    HomeComponent,
    RegisterComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterilDesign,
    FormsModule,
    ParticlesModule,
    FlexLayoutModule
  ],
  providers: [ChangeThemeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
