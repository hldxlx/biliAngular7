import { Component, OnInit } from '@angular/core';
//当做一个服务
import { HttpClient,HttpHandlers } from '@angular/common/http';
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  public list:any[]=[];
  constructor(public http:HttpClient) { }

  ngOnInit() {
  }
  getData(){
    alert('折行get请求');
    let api = 'http://a.itying.com/api/productlist';
    //rxjs
    this.http.get(api).subscribe((response:any)=>{
      console.log(response,'555');
      this.list = response.result;
    });
  }

  // doLogin(){
  //   //手动设置请求类型
  //   const httpOptions = {headers:new HttpHeaders({'Content-Type':'application/json'})};
  //   //存在跨域
  //   let api = '127.0.0.1:3000/dologin';
  //   this.http.post(api,{"username":"张三",'age':20},httpOptions).subscribe((response)=>{
  //     console.log(response);
  //   });
  //
  // }

  getJsonpData(){
    //jsonp 请求 服务器必须得支持jsonp
    // 有些是 http://a.itying.com/api/productlist?callback=vv
    // 有些是 http://a.itying.com/api/productlist?cb=vv

    let api = "http://a.itying.com/api/productlist";
    this.http.jsonp(api,'callback').subscribe((response)=>{
      console.log(response,'1212');
    })
  }

}
