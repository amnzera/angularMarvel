import { Injectable } from '@angular/core';
import {BehaviorSubject, map, Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})


export class MarvelService {

  public hero = new BehaviorSubject<any>(null)
  public comic = new BehaviorSubject<any>(null)
  public serie = new BehaviorSubject<any>(null)

  constructor(private http: HttpClient) { }

  setHero(hero: any){
    this.hero.next(hero)
  }

  setComic(comic: any){
    this.hero.next(comic)
  }

  setSerie(serie: any){
    this.serie.next(serie)
  }

  getImage(thumbnail: any) {
    return thumbnail && `${thumbnail.path}/standard_fantastic.${thumbnail.extension}`;
  }

  getAllCharacters(offset: number = 0): Observable<any> {
    return this.http.get<any>(`https://gateway.marvel.com/v1/public/characters?limit=50?&offset=${offset.toString()}`).pipe(
      map(response => {
        return response.data.results
      })
    )
  }


  getAllComics(offset: number = 0){
    return this.http.get<any>(`https://gateway.marvel.com/v1/public/comics?limit=50?&offset=${offset.toString()}`).pipe(
      map(response => {
        return response.data.results
      })
    )
  }

  getSeries(offset: number = 0){
    return this.http.get<any>(`https://gateway.marvel.com/v1/public/series?limit=50?&offset=${offset.toString()}`).pipe(
      map(response => {
        return response.data.results
      })
    )
  }



}
