import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RecoService } from './recognizer/reco.service';
import { Scores } from './scores';
import { NgStyle } from '@angular/common';


import { AppComponent } from './app.component';
import { EmotionPanelComponent } from './display/emotion-panel/emotion-panel.component';


@NgModule({
  declarations: [
    AppComponent,
    EmotionPanelComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [RecoService, Scores],
  bootstrap: [AppComponent]
})
export class AppModule { }
