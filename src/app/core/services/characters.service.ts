import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class CharactersService {
  public hero = new BehaviorSubject<any>(null)

  constructor(private http: HttpClient) { }

  setHero(hero: any){
    this.hero.next(hero)
  }

  getAllCharacters(): Observable<any> {
    return this.http.get<any>(`https://gateway.marvel.com/v1/public/characters`).pipe(
      map(response => {
        return response.data.results
      })
    )
  }



}
