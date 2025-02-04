import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  num1: number = 0
  num2: number = 0
  result: number = 0

  sum(){
    this.result = this.num1 + this.num2;
  }
  subtraction(){
    this.result = this.num1 - this.num2;
  }
  division(){
    this.result = this.num1 / this.num2;
  }
  multiplication(){
    this.result = this.num1 * this.num2;
  }
}
