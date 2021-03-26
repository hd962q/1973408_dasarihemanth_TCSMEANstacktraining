import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import { contactDetails } from '../contact.details';


@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']

})
export class PortfolioComponent implements OnInit {
  
  model = {ContactName: "vamsi",PhoneNumber: 9888};
  
  headers = ["ContactName", "PhoneNumber"];

  rows:any =         [

           
    ];
  
  loginRef= new FormGroup({
    fname:new FormControl(),
    number:new FormControl()
  });
 

  constructor() { }

  ngOnInit(): void {
  }
  save(){
    let cname=this.loginRef.get("fname")?.value;
    let number1=this.loginRef.get("number")?.value;
    let obj: any = {
      ContactName : cname,
      PhoneNumber : number1,
    };
    
    this.rows.push(obj);
    
  }


}
