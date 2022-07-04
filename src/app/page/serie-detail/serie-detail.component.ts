import { Component, OnInit } from '@angular/core';
import {MarvelService} from "../../core/services/marvel.service";
import {Subject} from "rxjs";

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.scss']
})
export class SerieDetailComponent implements OnInit {

  public serie$ = new Subject<any>();

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.serie$ = this.marvelService.serie;
    window.scroll({behavior: "smooth", top: 0 , left: 0})
  }

  getImage(character: any) {
    return this.marvelService.getImage(character.thumbnail);
  }
}
