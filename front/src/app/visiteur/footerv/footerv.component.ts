import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerv',
  templateUrl: './footerv.component.html',
  styleUrls: ['./footerv.component.scss']
})
export class FootervComponent implements OnInit {
  test : Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
