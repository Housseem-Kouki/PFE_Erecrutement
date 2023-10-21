import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footera',
  templateUrl: './footera.component.html',
  styleUrls: ['./footera.component.scss']
})
export class FooteraComponent implements OnInit {
  test: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
