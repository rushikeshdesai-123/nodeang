import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
employees:any
message;
  constructor( public service:DataService,public router:Router) { }
  
  GoToRegister()
  {
    this.router.navigate(['register']);
  }

  delete(num:any){
    let StateOfDelete= this.service.deleteData(num);
    StateOfDelete.subscribe((res:any)=>{
      if(res.affectedRows>0){
      this.getData();
      //this.router.navigate(['home']);
      }
    })
    
  }

  getData(){
    let StateOfResult= this.service.GetData();
    StateOfResult.subscribe((result)=>{
    this.employees = result; 
 });
  }
  
  ngOnInit() {

    let StateOfResult= this.service.GetData();
     StateOfResult.subscribe((result)=>{
     this.employees = result; 
     
     
    // this.employees = [
    //   {no : 11, name: "mahesh1", address: "pune"},
    //   {no : 12, name: "mahesh2", address: "panji"},
    //   {no : 13, name: "mahesh3", address: "mumbai"}
    // ];
  });
}
}
  
