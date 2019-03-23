/*
 动态路由
 1 配置动态路由
 {path:'newscontenttwo/:aid',component:NewscontenttwoComponent}
 2 跳转
 <ul>
 <li *ngFor="let item of list;let key=index;">
 <!--<a href="/newcontent?aid=123">{{key}}-&#45;&#45;{{item}}</a>-->
 <a [routerLink]="['/newscontenttwo',key]">{{key}}--{{item}}</a>
 </li>
 </ul>
 3接收
 import { ActivatedRoute } from '@angular/router';
 constructor(public route:ActivatedRoute) { }
 this.route.params.subscribe((data)=>{
 console.log(data);
 })
 */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-newscontenttwo',
  templateUrl: './newscontenttwo.component.html',
  styleUrls: ['./newscontenttwo.component.css']
})
export class NewscontenttwoComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    //获取动态路由传值
    this.route.params.subscribe((data)=>{
      console.log(data);
    })
  }

}
