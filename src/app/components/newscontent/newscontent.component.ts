/*
  get传值
  1 跳转
 <ul>
 <li *ngFor="let item of list;let key=index;">
 <!--<a href="/newcontent?aid=123">{{key}}-&#45;&#45;{{item}}</a>-->
 <a [routerLink]="['/newscontent']" [queryParams]="{aid:key,name:'张三'}">{{key}}--{{item}}</a>
 </li>
 </ul>

 2接收
 import { ActivatedRoute } from '@angular/router';
 constructor(public route:ActivatedRoute) { }
 this.route.queryParams.subscribe((data)=>{
 console.log(data);
 })

*/
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-newscontent',
  templateUrl: './newscontent.component.html',
  styleUrls: ['./newscontent.component.css']
})
export class NewscontentComponent implements OnInit {

  constructor(public route:ActivatedRoute) { }

  ngOnInit() {
    //console.log(this.route.queryParams);
    this.route.queryParams.subscribe((data)=>{
      console.log(data);
    })
  }

}
