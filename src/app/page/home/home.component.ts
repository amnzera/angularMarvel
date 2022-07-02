import {Component, OnInit} from '@angular/core';
import {CharactersService} from "../../core/services/characters.service";
import {take} from "rxjs";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  heroes: any

  constructor(private characterService: CharactersService) { }

  ngOnInit(): void {
   this.getCharacters()
  }

  getCharacters(page?: number){
    this.characterService.getAllCharacters()
      .pipe(take(1))
      .subscribe((response: any) => {
        this.heroes = response
      })
  }


}
