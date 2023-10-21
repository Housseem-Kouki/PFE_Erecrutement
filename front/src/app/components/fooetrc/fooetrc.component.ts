import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fooetrc',
  templateUrl: './fooetrc.component.html',
  styleUrls: ['./fooetrc.component.scss']
})
export class FooetrcComponent implements OnInit {
  test: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
