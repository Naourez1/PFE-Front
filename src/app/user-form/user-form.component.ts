import { Component, OnInit } from '@angular/core';
import{User}  from '../user';
import{Router}  from '@angular/router';
import { UserService} from '../services/user.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  private user= new User();
  constructor(private _userService : UserService , private _rotuer : Router) { }

  ngOnInit() {
    this.user=this._userService.getter();
  }
  processForm(){
    if(this.user.id==undefined){
       this._userService.createUser(this.user).subscribe((user)=>{
         console.log(user);
         this._rotuer.navigate(['/user']);
       },(error)=>{
         console.log(error);
       });
    }else{
       this._userService.updateUser(this.user).subscribe((user)=>{
         console.log(user);
         this._rotuer.navigate(['/user']);
       },(error)=>{
         console.log(error);
       });
    }
  }
}
