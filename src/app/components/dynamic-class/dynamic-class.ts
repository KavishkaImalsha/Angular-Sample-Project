import { NgClass, NgStyle } from '@angular/common';
import { Component, signal, WritableSignal } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-dynamic-class',
  imports: [NgClass, FormsModule, NgStyle],
  templateUrl: './dynamic-class.html',
  styleUrl: './dynamic-class.css',
})
export class DynamicClass {
  divStyle = "bg-red-500"

  productPrice = 0

  isDanger = false

  bgColor = 'black'

  myColors = {
    color: "red",
    "font-size": "20px",
    "font-style": "bold"
  }

  isSideBarShow = false
}
