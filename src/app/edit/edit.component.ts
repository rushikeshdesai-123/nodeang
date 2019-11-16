import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  emp;
  message;
  constructor(public routes: ActivatedRoute,
              public service: DataService,
              public router: Router) { }

  ngOnInit() {
     let arrivalStatus = this.routes.paramMap;
     arrivalStatus.subscribe((params)=>{
       let No=params.get("No");
       console.log(No);
       let dataStatus= this.service.GetDataByID(No);
       dataStatus.subscribe((result:any)=>{
         if(result.length>0){
           this.emp=result[0];
           this.message="Record Found..!";
         }
         else{
           this.message="Record Not Found..!";
         }
       })
     })
  }

  update(){
    let updateStatus = this.service.updateData(this.emp);
    updateStatus.subscribe((result:any)=>{
      if(result.affectedRows>0){
        this.router.navigate(['home']);

      }
      else{
        this.message="Something Wrong";
      }
    })
  }

}
