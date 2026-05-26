import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {
  userName = "test user"
  userId = 5521435
  userbio = {
    id: 23213,
    description: "Web Developer"
  }
  email: String
  showEmail:Boolean = false

  constructor() { 
    this.email = "testuser@gmail.com"
  }

  showName() { 
    this.showEmail = true
    return this.userName
  }
}
