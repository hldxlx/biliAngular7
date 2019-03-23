import { BrowserModule } from '@angular/platform-browser';
import { SlistComponent } from './components/sport/slist/slist.component';
import { ScateComponent } from './components/sport/scate/scate.component';
import { SettingComponent } from './components/product/setting/setting.component';
import { NgModule } from '@angular/core';
import { HttpClientModule,HttpClientJsonpModule } from '@angular/common/http';
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
import {RequestService} from "./services/request.service";
import {HttpserviceService} from "./services/httpservice.service";

import { TransitionComponent} from './components/transition/transition.component';
import {FooterComponent} from "./components/footer/footer.component";
import {KissComponent} from "./components/kiss/kiss.component";
import { ListComponent } from './components/list/list.component';
import { ProductComponent } from './components/product/product.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { NewscontenttwoComponent } from './components/newscontenttwo/newscontenttwo.component';
import { ProductcontentComponent } from './components/productcontent/productcontent.component';
import { SportComponent } from './components/sport/sport.component';
import { WelcomeComponent }from './components/product/welcome/welcome.component';
import { ActComponent } from './components/act/act.component';




@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    HeaderComponent,
    SearchComponent,
    TransitionComponent,
    TodolistComponent,
    FooterComponent,
    ListComponent,
    KissComponent,
    ProductComponent,
    NewscontentComponent,
    NewscontenttwoComponent,
    ProductcontentComponent,
    SportComponent,
    WelcomeComponent,
    SettingComponent,
    ScateComponent,
    SlistComponent,
    ActComponent,
    HomeComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpClientJsonpModule
  ],
  providers: [StorageService,RequestService,HttpserviceService],
  bootstrap: [AppComponent]
})
export class AppModule { }
