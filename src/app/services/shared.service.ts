import { EventEmitter, Injectable, Output } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class SharedService {
  @Output() detectLogIn: EventEmitter<any> = new EventEmitter();
  constructor() { }

  getLocalStorage(){
    if(localStorage.length !==0){
      this.detectLogIn.emit(true);
      return true;
    }
   
  }

  logOut(){
    localStorage.clear();
    this.detectLogIn.emit(false);
  }
}
