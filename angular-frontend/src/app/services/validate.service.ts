import { Injectable } from '@angular/core';

@Injectable()
export class ValidateService {

  constructor() { }

//validations
  validateRegister(user){
    if(user.firstname == undefined || user.lastname == undefined || user.username == undefined || user.email == undefined || user.password == undefined){
      return false;
    } else {
      return true;
    }
  }
//validate email

validateEmail(email){
  const RegEx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return RegEx.test(String(email).toLowerCase());
}

}
