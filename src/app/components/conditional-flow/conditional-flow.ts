import { Component, signal, WritableSignal,  } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-conditional-flow',
  imports: [FormsModule],
  templateUrl: './conditional-flow.html',
  styleUrl: './conditional-flow.css',
})
export class ConditionalFlow {
  isCodeHave: boolean = false

  isDanger: WritableSignal<boolean> = signal(false)

  studentMark: number = 0

  setIsDanger() { 
    this.isDanger.set(!this.isDanger())
  }
}
