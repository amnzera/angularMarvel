import {Component, OnInit} from '@angular/core';
import {MarvelService} from "../../core/services/marvel.service";
import {take} from "rxjs";
import {Router} from "@angular/router";
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  heroes: any
  offset: number = 0;

  constructor(private marvelService: MarvelService, private router: Router) { }

  ngOnInit(): void {
   this.getCharacters()
  }

  paginator(offset: number){
    this.heroes = null;
    this.offset = this.offset + offset;
    this.getCharacters(this.offset)
  }

  getCharacters(offset?: number){
    this.marvelService.getAllCharacters(offset)
      .pipe(take(1))
      .subscribe((response: any) => {
        this.heroes = response
      })
  }

  details(hero: any){
    this.marvelService.setHero(hero);
    this.router.navigate(['/details'])
  }


}
