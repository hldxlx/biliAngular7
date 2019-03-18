import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todolist',
  templateUrl: './todolist.component.html',
  styleUrls: ['./todolist.component.css']
})
export class TodolistComponent implements OnInit {
  public keyword:string;
  public todolist:any[]=[];
  constructor() { }

  ngOnInit() {
  }
  doAdd(e){
    if(e.keyCode==13) {
      if(!this.todolistHaskeyword(this.todolist,this.keyword)){
        this.todolist.push({
          title:this.keyword,
          status:0 //0 表示代办
        });
        this.keyword = '';
      }else{
          alert('数据已经存在');
          this.keyword = '';
      }

    }
  }

  deleteData(key){
    this.todolist.splice(key,1);
  }
  //如果数组有keyword返回true,否则返回false
  todolistHaskeyword(todolist:any,keyword:any){
    //异步 会存在问题
    // todolist.forEach(value=>{
    //   if(value.title==keyword){
    //     return true;
    //   }
    // });
    // return false;
    if(!keyword) return false;
    for(var i=0;i<todolist.length;i++){
        if(todolist[i].title==keyword){
          return true;
        }
    }
    return false;
  }

}
