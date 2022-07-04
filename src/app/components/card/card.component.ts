import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() hero: any;
  @Input() comic: any;
  @Input() serie: any;
  @Output() clickEmitter = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  clickAction(payload: any){
    this.clickEmitter.emit(payload);
  }

}
