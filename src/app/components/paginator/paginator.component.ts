import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent implements OnInit {

  @Output() paginatorEmitter = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  setOffset(offset: number){
    this.paginatorEmitter.emit(offset)
    window.scroll({behavior: "smooth", top: 0 , left: 0})
  }

}
