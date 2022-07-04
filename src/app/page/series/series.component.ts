import { Component, OnInit } from '@angular/core';
import {take} from "rxjs";
import {MarvelService} from "../../core/services/marvel.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
  styleUrls: ['./series.component.scss']
})
export class SeriesComponent implements OnInit {

  series: any
  offset: number = 0;

  constructor(private marvelService: MarvelService, private router: Router) { }

  ngOnInit(): void {
    this.getSeries()
  }

  paginator(offset: number){
    this.series = null;
    this.offset = this.offset + offset;
    this.getSeries(this.offset)
  }

  getSeries(offset?: number){
    this.marvelService.getSeries(offset)
      .pipe(take(1))
      .subscribe((response: any) => {
        this.series = response
      })
  }

  details(serie: any){
    this.marvelService.setSerie(serie);
    this.router.navigate(['/serie-detail'])
  }

}
