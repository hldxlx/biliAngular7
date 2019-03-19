/*
 ViewChild获取dom节点
 1 模板中给dom起一个名字
 <div #myBox>
 我是一个dom节点666
 </div>
 2 在业务逻辑里面引入ViewChild
 import { Component, OnInit,ViewChild } from '@angular/core';
 3 写在类里面 @ViewChild('myBox') myBox:any;
 4 ngAfterViewInit 生命周期函数里面获取dom

 ViewChild不仅可以获取节点 还可以获取组件的实例(也叫获取一个组件)
*/
import { Component, OnInit,ViewChild } from '@angular/core';

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
  public titleTwo:string="首页组件的标题";
  public msg:string="我是父组件的msg";

  //获取dom节点
  @ViewChild('myBox') myBox:any;
  //获取一个组件
  @ViewChild('header') header:any;

  constructor() {
    console.log(this.today)
  }

  ngOnInit() {
    //组件和指令初始化完成 并不是真正的dom加载完成
    let oBox:any = document.getElementById('box');
    console.log(oBox.innerHTML);
    oBox.style.color = 'blue';

    //获取不到dom节点
    // let oBox1:any = document.getElementById('box1');
    // console.log(oBox1.innerHTML);
  }
  //视图加载完成后触发的方法 dom加载完成 (建议把dom操作放在这个里面)
  ngAfterViewInit(){
    let oBox1:any = document.getElementById('box1');
    console.log(oBox1.innerHTML);
    oBox1.style.color = 'green';

    //建议这种
    console.log(this.myBox.nativeElement);
    this.myBox.nativeElement.style.color='purple';
    console.log(this.myBox.nativeElement.innerHTML);

  }
  getChildRun(){
    //调用子组件里面的方法
    this.header.run();
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
  run2(){
    alert("我是父组件的run2方法");
  }


}
