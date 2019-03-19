import { Component, OnInit,ViewChild } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  //定义普通数据
  public title = '新闻的title';
  msg = '新闻组件的msg';
  username:string = '卡卡斌';
  public student:any = '我是一个学生的属性';//推荐
  public userinfo:object = {
    username:"张三",
    age:'20'
  }
  public message:any;
  public content = "<h1>我是一个html标签</h1>";


  //定义数组
  public arr = ['1','2','3'];

  //推荐
  public list:any[] = ['a','b','c'];

  public items:Array<any> = ['a','b','c'];

  public userlist:any[] = [{
    username:"张三",
    age:'20'
  },{
    username:"李四",
    age:'21'
  },{
    username:"王五",
    age:'28'
  }];
  public cars:any[] = [{
    cate:'宝马',
    list:[{
      title:'宝马01'
    },
    {
      title:'宝马02'
    },
    {
      title:'宝马03'
    }]
  },{
    cate:'奥迪',
    list:[{
      title:'奥迪a'
    },
    {
      title:'奥迪b'
    },
    {
      title:'奥迪c'
    }]
  }]
  @ViewChild('footer') footer:any;
  constructor() {
    this.message = '这是给属性赋值--（改变属性的值）';
    this.msg = '改变后的msg的值'

  }

  ngOnInit() {
  }
  getChildMsg(){
    //获取footer子组件的数据
    console.log(this.footer.msg);;
  }
  getChildRun(){
    this.footer.run();
  }

}
