import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {
  employees = [{ name: 'A' }, { name: 'B' }];
  employeeName: string;

  constructor() {}

  ngOnInit() {}

  addEmp() {}

  removeEmp() {
    if (confirm('Are you sure?')) {
      this.employees.pop();
    }
  }
}
