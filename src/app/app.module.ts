import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
//引入表单相应模块，才可以用双向数据绑定
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import {SearchComponent} from "./components/search/search.component";
import {TodolistComponent} from "./components/todolist/todolist.component";
import {FormComponent} from "./components/form/form.component";



@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent,
    SearchComponent,
    TodolistComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
