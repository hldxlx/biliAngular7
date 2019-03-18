import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public title:string ='我是一个title';
  public picurl = 'http://www.baidu.com/img/bd_logo1.png?where=super';
  public list:any[] = [{
    title:'体育1'
  },
  {
    title:'体育2'
  },
  {
    title:'体育3'
  }];
  public flag:boolean = true;
  public orderStatus:number = 1;
  public attr:string = 'red';
  public today:any = new Date();
  public keywords:string='默认值 ';

  constructor() {
    console.log(this.today)
  }

  ngOnInit() {
  }
  run(event){
    alert(this.title);
    let dom:any = event.target;
    dom.style.color = 'red';
  }
  setTitle(){
    this.title='改变后的title'
  }
  keyDown(e){
    console.log(e);
    if(e.keyCode == 13){
      console.log('按了一下回车');
    }else{
      //e.target 获取dom对象
      console.log(e.target.value);
    }
  }

  changeKeywords(){
      this.keywords = '改变后的值';
  }
  getKeywords(){
    console.log(this.keywords);
  }


}
