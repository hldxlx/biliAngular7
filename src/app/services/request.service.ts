import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
@Injectable()
export class RequestService {

  constructor() { }
  //同步
  getData(){
    return 'this is service data'
  }
  getCallbackData(cb){
    setTimeout(()=>{
      var data = '张三';
      // return data;

      cb(data);
    },1000)
  }

  getPromiseData(){
    return new Promise((resolve,reject)=>{

      setTimeout(()=>{
        var data = '张三--promise';
        resolve(data);
      },2000)
    })

  }

  getRxjsData(){
    return new Observable((observer)=>{
      setTimeout(()=>{
        var data = '张三--promise';
        observer.next(data);
        observer.error('数据');
      },2000)
    })
  }

  getPromiseIntervalData(){
    return new Promise((resolve,reject)=>{

      setInterval(()=>{
        var data = '张三--promise IntervalData';
        resolve(data);
      },1000)
    })

  }

  getRxjsIntervalData(){
    let count = 0;
    return new Observable<any>((observer)=>{
      setInterval(()=>{
        count++;
        var data = '张三--promise RxjsIntervalData'+count;
        observer.next(data);
      },1000)
    })
  }

  getRxjsIntervalNum(){
    let count = 0;
    return new Observable<any>((observer)=>{
      setInterval(()=>{
        count++;
        observer.next(count);
      },1000)
    })
  }


}
