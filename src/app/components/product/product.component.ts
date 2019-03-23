/*
 js跳转路由
 1 动态路由
   1 引入
   import { Router } from '@angular/router';
   2 声明模块
   constructor(public router:Router) { }
   3 跳转
   this.router.navigate(['/home/']);

   this.router.navigate(['/productcontent/','666'])

 2 get传值

   1 引入
   import { Router } from '@angular/router';
   2 声明模块
   constructor(public router:Router) { }
   3 跳转
  this.router.navigate(['/news/'],{
      queryParams:{'aid':654}
  });

 */
import { Component, OnInit } from '@angular/core';
import { Router,NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit() {
  }
  goProductsContent(){
    //路由跳转  适合普通路由和动态路由   应用场景：登录时判断它有没有登录成功，用js跳转
    this.router.navigate(['/productcontent/','666'])
  }
  goHome(){
    this.router.navigate(['/home/']);
  }
  goNews(){
    //跳转并进行get传值
    let queryParams:NavigationExtras = {
      queryParams:{'aid':654}
    }
    this.router.navigate(['/news/'],queryParams);
  }

}
