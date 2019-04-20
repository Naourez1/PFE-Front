import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Router } from '@angular/router';
import{User}  from '../user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  users: any;
  errorMessage: string;
  constructor(private userService: UserService, private _router : Router) { }

  ngOnInit() {
    this.userService.getUsers().subscribe(
      data => {
        this.users = data;
        console.log(data);
      },
      error => {
        console.log(error);
      }
    );
  }
 
  deleteUser(user){
    this.userService.deleteUser(user.id).subscribe((data)=>{
        this.users.splice(this.users.indexOf(user),1);
    },(error)=>{
      console.log(error);
    });
  }

   updateUser(user){  
     this.userService.setter(user);
     this._router.navigate(['/op']);


   }
   newUser(){
   let user = new User;
    this.userService.setter(user);
     this._router.navigate(['/op']);
   
   }
}
