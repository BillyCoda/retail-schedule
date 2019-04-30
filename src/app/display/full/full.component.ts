import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.css']
})
export class FullComponent implements OnInit {
  employees = [{ name: 'Apple', mon: '9-5' }, { name: 'Baffle', mon: '9-5' }];
  employeeName: string;

  constructor() {}

  ngOnInit() {}

  addEmp() {
    this.employees.push({ name: this.employeeName, mon: '' });
    this.employeeName = '';
  }

  removeEmp() {
    if (confirm('Are you sure?')) {
      this.employees.pop();
    }
  }
}
