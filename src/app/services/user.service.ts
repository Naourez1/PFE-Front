import { Injectable } from '@angular/core';
import{Http, Response, Headers, RequestOptions} from '@angular/http';
import { HttpClient } from '@angular/common/http';
import{Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import{User}  from '../user';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private userUrl = 'http://localhost:8082/api/test/user';
  private pmUrl = 'http://localhost:8082/api/test/pm';
  private adminUrl = 'http://localhost:8082/api/test/admin';
  private headers = new Headers({'Content-Type':'application/json'});
  private user = new User();
  private baseUrl:string = 'http://localhost:8082/api';
  private options = new RequestOptions({headers:this.headers});

 

  constructor(private http: HttpClient ) { }

  getUsers(){
  return this.http.get(this.baseUrl + '/users')
  }
  getUserBoard(): Observable<string> {
    return this.http.get(this.userUrl, { responseType: 'text' });
  }

  getPMBoard(): Observable<string> {
    return this.http.get(this.pmUrl, { responseType: 'text' });
  }

  getAdminBoard(): Observable<string> {
    return this.http.get(this.adminUrl, { responseType: 'text' });
  }
  
  getUser(id:Number){

    return this.http.get(this.baseUrl+'/user/'+id);
  }
  deleteUser(id:Number){

    return this.http.delete(this.baseUrl+'/user/'+id);
  }

  whoami()
  {
    return this.http.get(this.baseUrl+'/me');

  }

  refresh()
  {
    return this.http.get(this.baseUrl+'/refresh');

  }
  createUser(user:User){

    return this.http.post(this.baseUrl+'/user',user);
  }
   
   updateUser(user:User){

    return this.http.put(this.baseUrl+'/userput',user);
  }
  
  errorHandler(error:Response){

     return Observable.throw(error||"SERVER ERROR");
  }

   setter(user:User){
     this.user=user;
   }

  getter(){
    return this.user;
  }
}
