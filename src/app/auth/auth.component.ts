import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {
  authForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.authForm = new FormGroup({
      fullName: new FormControl(),
      email: new FormControl()
  });

}
onSubmit(): void {
  console.log(this.authForm.value);
}}