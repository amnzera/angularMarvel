import {Component, OnInit} from '@angular/core';
import {MarvelService} from "../../core/services/marvel.service";
import {take} from "rxjs";
import {Router} from "@angular/router";
import { GET_PRODUCTS } from '../../queries/get-products.query';
import * as CryptoJS from 'crypto-js';
import {Apollo , gql} from "apollo-angular";
import { Observable } from 'rxjs';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit  {

  heroes: any
  offset: number = 0;
  posts: Observable<any[]> | undefined;

  constructor(
    private marvelService: MarvelService,
    private router: Router,
    private apollo: Apollo
    ) { }

  async ngOnInit(): Promise<void> {

    this.call(this.removeCryptography()).subscribe((teste: any) => {
      console.log(teste)
    })
  }

  removeCryptography() {
    const decrypted = CryptoJS.AES.decrypt(GET_PRODUCTS, 'secretKey');
    const originalQuery = decrypted.toString(CryptoJS.enc.Utf8);
    const decryptedQuery = originalQuery
    return decryptedQuery;
  }


  call(query: any): Observable<any> {
    return this.apollo
    .watchQuery<any>({
      query: gql(query),
    }).valueChanges;
  }


  // decryptQuery(encryptedQuery: string) {
  //   const decrypted = CryptoJS.AES.decrypt(encryptedQuery, 'secretKey');
  //   const originalQuery = decrypted.toString(CryptoJS.enc.Utf8);
  //   // return originalQuery;
  //   console.log(originalQuery)
  // }

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
