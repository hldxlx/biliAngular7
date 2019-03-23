//配置路由的模块
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewsComponent } from './components/news/news.component';
import { HomeComponent } from './components/home/home.component';
import { NewscontentComponent } from './components/newscontent/newscontent.component';
import { NewscontenttwoComponent } from './components/newscontenttwo/newscontenttwo.component';
import {ProductcontentComponent} from "./components/productcontent/productcontent.component";
import { ProductComponent } from './components/product/product.component';
  import { SettingComponent } from './components/product/setting/setting.component';
  import { WelcomeComponent } from './components/product/welcome/welcome.component';
import {SportComponent} from "./components/sport/sport.component";
  import { ScateComponent } from './components/sport/scate/scate.component';
  import { SlistComponent } from './components/sport/slist/slist.component';
import { ActComponent } from './components/act/act.component';

const routes: Routes = [
  {path:'home',component:HomeComponent},
  {path:'news',component:NewsComponent},
  {path:'newscontent',component:NewscontentComponent},
  {path:'newscontenttwo/:aid',component:NewscontenttwoComponent},
  {
    path:'product',component:ProductComponent,
    children:[
      {path:'welcome',component:WelcomeComponent},
      {path:'setting',component:SettingComponent},
      {path:'**',redirectTo:'welcome'}
    ]
  },
  {path:'productcontent/:pid',component:ProductcontentComponent},
  {
    path:'sport',component:SportComponent,
    children:[
      {path:'scate',component:ScateComponent},
      {path:'slist',component:SlistComponent},
      {path:'**',redirectTo:'scate'}
    ]
  },
  {path:'act',component:ActComponent},
  //匹配不到路由时加载的组件 或者跳转的组件
  {path:'**',redirectTo:'home'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
