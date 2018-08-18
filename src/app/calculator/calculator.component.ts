import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  title = 'Calculator';
  field1 = 0;
  field2 = 0;
  result = 0;

  constructor() {
  }

  ngOnInit() {
  }

  add() {
    return this.result = Number(this.field1) + Number(this.field2);
  }

  subtract() {
    return this.result = Number(this.field1) - Number(this.field2);
  }

  multiply() {
    return this.result = Number(this.field1) * Number(this.field2);
  }

  divide() {
    return this.result = Number(this.field1) / Number(this.field2);
  }

}
