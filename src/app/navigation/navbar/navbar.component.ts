import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';
import {NgbModal, NgbModalOptions} from '@ng-bootstrap/ng-bootstrap';
import { NgZone } from '@angular/core';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  isLoggedIn : boolean;
  modalOptions:NgbModalOptions;
  isShrunk: boolean = false;
  role = 'unauthorized';
  constructor(
    private sharedServ: SharedService,
    private modalService: NgbModal,
  ) {  
      this.modalOptions = {
        backdrop:'static',
        backdropClass:'customBackdrop',
        windowClass:'slideInUp'
      }
      this.sharedServ.detectLogIn.subscribe((res) =>{
        this.hideLogin(res)
    });
  }

  ngOnInit(): void {
    if(localStorage.length !== 0){
      this.isLoggedIn = true;
    }
  }

  hideLogin(res){
    if (res == true){
     this.isLoggedIn = true; 
    }else{
      this.isLoggedIn = false;
    }
    
  }
  
  logOut(content){
    this.modalService.open(content, this.modalOptions).result.then((result) => {
      if(result == 'logout'){
        this.sharedServ.logOut();
      } 
    });
  }



}
