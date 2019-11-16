import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(public service:DataService,public router:Router) { }
  AddEmp(dataFromUI: any)
  {
    console.log(dataFromUI.form.value); 
    let emp=dataFromUI.form.value;
    let state=this.service.AddData(emp);  
    state.subscribe((resio)=>{console.log(resio);this.router.navigate(['home']);}) 
  }
  ngOnInit() {
  }

}
