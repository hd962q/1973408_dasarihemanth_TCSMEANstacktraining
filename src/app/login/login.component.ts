import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginRef= new FormGroup({
    user2:new FormControl(),
    pass2:new FormControl()
  });

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
login(){
   let a=this.loginRef.get("user2")?.value
   let b=this.loginRef.get("pass2")?.value
   let key1 =sessionStorage.getItem("names1");
   let key2=sessionStorage.getItem("names2");
   //let key=sessionStorage.getItem(JSON.parse("names"))
   //console.log(a)
   //console.log(b)
   //console.log(key)
   //console.log(key2)
   if((a==key1) && (b==key2)){ 
      console.log("successful")
     this.router.navigate(["portfolio"])
    }
    else{
      console.log("false")
    }
   //console.log(b)
    //if((a==key(user))&&(b==key.pass1)){
      

}

signup(){
  this.router.navigate(["signup"])
}
}
