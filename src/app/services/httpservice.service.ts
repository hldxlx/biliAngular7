import { Injectable } from '@angular/core';
import axios from 'axios';
@Injectable()
export class HttpserviceService {

  constructor() { }

  axiosGet(api){
    return new Promise((resolve,reject)=>{
      axios.get(api)
        .then(function(response){
          console.log(response,'111');
          resolve(response);
        })
    })

  }

}
