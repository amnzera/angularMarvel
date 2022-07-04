import { Component, OnInit } from '@angular/core';
import {Subject} from "rxjs";
import {MarvelService} from "../../core/services/marvel.service";

@Component({
  selector: 'app-detail-comic',
  templateUrl: './detail-comic.component.html',
  styleUrls: ['./detail-comic.component.scss']
})
export class DetailComicComponent implements OnInit {

  public comic$ = new Subject<any>();

  constructor(private marvelService: MarvelService) { }

  ngOnInit(): void {
    this.comic$ = this.marvelService.hero;
    window.scroll({behavior: "smooth", top: 0 , left: 0})
  }

  getImage(character: any) {
    return this.marvelService.getImage(character.thumbnail);
  }

}
