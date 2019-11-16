
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(public http: HttpClient) 
  {

  }

  GetData()
  {
   return this.http.get("http://localhost:4000/employees");
  }

  deleteData(no){
    console.log(no);
    return this.http.delete("http://localhost:4000/employees/"+no);
  }
  GetDataByID(num){
    return this.http.get("http://localhost:4000/employees/"+num);
  }

  updateData(empObj){
    return this.http.put("http://localhost:4000/employees/"+empObj.no, empObj);
  }
  AddData(emp:any)
  {
    return this.http.post("http://localhost:4000/employees",
                          emp);
  }

}



