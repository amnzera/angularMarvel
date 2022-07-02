import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  public pages = [1,2,3,4,5,6,7,8,9,10]

  constructor() { }

  ngOnInit(): void {
  }

}
