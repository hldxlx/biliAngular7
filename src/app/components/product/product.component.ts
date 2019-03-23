import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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

}
