import { Component } from '@angular/core';

@Component({
  selector: 'app-for-loop-table',
  imports: [],
  templateUrl: './for-loop-table.html',
  styleUrl: './for-loop-table.css',
})
export class ForLoopTable {
  employees = [
    { name: "kamal", email: "Kamal@gmail.com", salary: 50000 },
    {name: "Amal", email: "Amal@gmail.com", salary: 70000}
  ]
}
