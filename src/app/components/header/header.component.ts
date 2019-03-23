import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  //接受父组件传过来的数据
  @Input() tit:any;
  @Input() msg:any;
  @Input() home:any;
  constructor() { }

  ngOnInit() {
  }
  run(){
    console.log("我是header里面的run方法")
  }
  getParentMsg(){
    //获取父组件的数据
    alert(this.msg);
  }
  getParentRun(){
    //折行父组件的run2方法

    console.log(this.home.msg);
    this.home.run2();
  }

}
