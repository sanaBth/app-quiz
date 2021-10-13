import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from '../model/user';
import { LocalstorageService } from '../service/localstorage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userForm:FormGroup;
  constructor(private router: Router,private _loginservice :LocalstorageService) { }
  currentUser : User = new User('','','','');
  public users : User[] = []
  ngOnInit(): void {
    this.userForm = new FormGroup
    ({
      email: new FormControl('',Validators.required),
      password: new FormControl('',Validators.required),
    })
  }
  public login()
  {
    this.currentUser.email = this.userForm.controls.email.value
    this.currentUser.password = this.userForm.controls.password.value
   
    this.users = this._loginservice.login(this.currentUser)
    console.log(this.users);
    let exist = this.users.length && 
    this.users.some(data => data.email.toLowerCase() == this.userForm.controls.email.value && data.password.toLowerCase() == this.userForm.controls.password.value);
    if(!exist){
      alert("Veuillez vérifier vos données");
  }
  else{
    console.log(this.users);
    let userconnected = this.users.find((user)=> user.email.toLowerCase() == this.currentUser.email && user.password.toLowerCase() == this.currentUser.password)
    console.log(userconnected)
    localStorage.setItem('userconnected', JSON.stringify(userconnected));  
    this.router.navigate(['/home'])
   
  }
}
}
