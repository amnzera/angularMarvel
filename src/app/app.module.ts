import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MarvelService} from "./core/services/marvel.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./core/interceptor/auth.interceptor";
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './page/home/home.component';
import { CardComponent } from './components/card/card.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { DetailsComponent } from './page/details/details.component';
import { ListGroupComponent } from './components/list-group/list-group.component';
import { ComicsComponent } from './page/comics/comics.component';
import { DetailComicComponent } from './page/detail-comic/detail-comic.component';
import { LoadingComponent } from './components/loading/loading.component';
import { JokeComponent } from './components/joke/joke.component';
import { SeriesComponent } from './page/series/series.component';
import { SerieDetailComponent } from './page/serie-detail/serie-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    PaginatorComponent,
    DetailsComponent,
    ListGroupComponent,
    ComicsComponent,
    DetailComicComponent,
    LoadingComponent,
    JokeComponent,
    SeriesComponent,
    SerieDetailComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    MarvelService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
