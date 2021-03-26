import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  loginRef= new FormGroup({
    user:new FormControl(),
    pass:new FormControl()
  });

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  checkUser(){
  //console.log(this.loginRef.value);
  let user1=this.loginRef.get("user")?.value;
  let pass1=this.loginRef.get("pass")?.value;
 // const details={
       //user1:user1,
       //pass1:pass1
  //}
 // console.log(details)
 JSON.stringify(sessionStorage.setItem("names1",user1));
 JSON.stringify(sessionStorage.setItem("names2",pass1));
  //console.log(k)
 // sessionStorage.setItem("pass",JSON.stringify(pass1))

}
  return(){
     this.router.navigate(["login"]);
  }
}
