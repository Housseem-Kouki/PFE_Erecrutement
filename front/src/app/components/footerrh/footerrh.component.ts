import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footerrh',
  templateUrl: './footerrh.component.html',
  styleUrls: ['./footerrh.component.scss']
})
export class FooterrhComponent implements OnInit {
  test: Date = new Date();
  constructor() { }

  ngOnInit(): void {
  }

}
