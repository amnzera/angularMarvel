import { Component, OnInit } from '@angular/core';
import {MarvelService} from "../../core/services/marvel.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  public hero$ = new Subject<any>();

  constructor(private characterService: MarvelService) { }

  ngOnInit(): void {
   this.hero$ = this.characterService.hero;
  }

  getImage(character: any) {
    return this.characterService.getImage(character.thumbnail);
  }

}
