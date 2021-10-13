import { Injectable } from '@angular/core';
import { User } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class LocalstorageService {
  public users : User[] = [ ]
  constructor() { }
  
  public register(user: User): void 
  {
    // get array of tasks from local storage
    this.users = JSON.parse(localStorage.getItem('Users') || '[]');
    // push new task to array
    this.users.push(user);
    // insert updated array to local storage
    localStorage.setItem('Users',JSON.stringify(this.users));
    
  }
  public login(user: User) 
  {
    
    // get array of tasks from local storage
    this.users = JSON.parse(localStorage.getItem('Users') || '[]');
    return(this.users)
    // push new task to array
    
    
    //localStorage.setItem('Users',JSON.stringify(this.users));
    
  }
  public logout()
  {
     localStorage.removeItem('userconnected')

  }
 
}
