import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-register',
  imports: [],
  templateUrl: './register.html',
  styleUrl: './register.css',
})
export class Register {
  count = signal(0)
  userDetails = signal({
    email: "testuser@gmail.com"
  })

  changeCount(count: number) { 
    this.count.set(count)
  }
}
