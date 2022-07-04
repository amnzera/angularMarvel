import { Component, OnInit } from '@angular/core';
import {take} from "rxjs";
import {MarvelService} from "../../core/services/marvel.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-comics',
  templateUrl: './comics.component.html',
  styleUrls: ['./comics.component.scss']
})
export class ComicsComponent implements OnInit {

  public comics: any
  offset: number = 0;

  constructor(private marvelService: MarvelService,private router: Router) { }

  ngOnInit(): void {
    this.getComics();
  }

  paginator(offset: number){
    this.comics = null;
    this.offset = this.offset + offset;
    this.getComics(this.offset)
  }

  getComics(offset?: number){
    this.marvelService.getAllComics(offset)
      .pipe(take(1))
      .subscribe((response: any) => {
        this.comics = response
      })
  }


  detailsComic(comic: any){
    this.marvelService.setComic(comic);
    this.router.navigate(['/detail-comic'])
  }

}
