import {Component, OnInit} from '@angular/core';
import {MarvelService} from "../../core/services/marvel.service";
import {take} from "rxjs";
import {Router} from "@angular/router";
// @ts-ignore
import { GET_PRODUCTS } from '../../queries/get-products.query.mjs';
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
    console.log(GET_PRODUCTS)
    this.decryptQuery(GET_PRODUCTS)
    // const x = CryptoJS.AES.decrypt(GET_PRODUCTS,'secretKey')
    // const decryptedQuery = x.toString(CryptoJS.enc.Utf8);
    // console.log(decryptedQuery)
   this.getCharacters()
  }


  decryptQuery(encryptedQuery: string) {
    const decrypted = CryptoJS.AES.decrypt(encryptedQuery, 'secretKey');
    const originalQuery = decrypted.toString(CryptoJS.enc.Utf8);
    // return originalQuery;
    console.log(originalQuery)
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
