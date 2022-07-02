import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CharactersService} from "../../core/services/characters.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input() hero: any;
  constructor(private characterService: CharactersService , private router: Router) { }

  ngOnInit(): void {
  }

  details(hero: any){
    this.characterService.setHero(hero);
    this.router.navigate(['/details'])

  }
}
