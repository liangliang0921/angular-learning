import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExerciseComponent } from './exercise/exercise.component';
import { StudyNGComponent } from './study-ng/study-ng.component';
import { NgZorroAntdModule, NZ_I18N, pt_PT } from 'ng-zorro-antd';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData } from '@angular/common';
import pt from '@angular/common/locales/pt';
import { PagesComponent } from './pages/pages.component';

registerLocaleData(pt);

@NgModule({
  declarations: [
    AppComponent,
    ExerciseComponent,
    StudyNGComponent,
    PagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
  ],
  providers: [{ provide: NZ_I18N, useValue: pt_PT }],
  bootstrap: [AppComponent]
})
export class AppModule { }
