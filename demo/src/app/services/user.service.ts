import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  apiURL: string = environment.apiURL;
  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getData(){
   // return this.http.get('${this.localurl+"User"}');
   return this.http.get(`${this.apiURL+"User"}`);

  }

    postData(formData: any){
     // return this.http.post('https://localhost:5001/api/User/',);
      return this.http.post(`${this.apiURL+"User"}`,formData)
    }



  getDatabyId(id: string)
  {

   // return this.http.get('https://localhost:5001/api/User/'+id);
    return this.http.get(`${this.apiURL+"User/"}`+id);

  }


  putData(userId:string,formData: any){
    debugger
    //return this.http.put('https://localhost:5001/api/User/'+userId,formData);
    return this.http.put(`${this.apiURL+"User/"}`+userId,formData)
  }
  deleteData(id: string){
    debugger
    return this.http.delete(`${this.apiURL+"User/"}`+id);
  }

}
