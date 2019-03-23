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

//引入并且配置服务
import {StorageService} from "./services/storage.service";
import { TransitionComponent} from './components/transition/transition.component';
import {FooterComponent} from "./components/footer/footer.component";
import {KissComponent} from "./components/kiss/kiss.component";
import {RequestService} from "./services/request.service";


@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent,
    SearchComponent,
    TransitionComponent,
    TodolistComponent,
    FooterComponent,
    KissComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [StorageService,RequestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
