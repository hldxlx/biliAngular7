import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public peopleInfo:any = {
    username:'',
    sex:'1',
    cityList:['北京','上海','深圳'],
    city:'北京',
    hobby:[{
      title:'吃饭',
      checked:false
    },{
      title:'睡觉',
      checked:false
    },{
      title:'撸码',
      checked:true
    }],
    mark:''

  }
  constructor() { }

  ngOnInit() {
  }
  doSubmit(){
    //1   jq dom获取
    //let usernameDom:any = document.getElementById('username');
    //console.log(usernameDom.value);

    //2 双向数据绑定获取表单数据
    console.log(this.peopleInfo)
  }

}
