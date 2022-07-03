import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {CharactersService} from "./core/services/characters.service";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {AuthInterceptor} from "./core/interceptor/auth.interceptor";
import { FooterComponent } from './components/footer/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './page/home/home.component';
import { CardComponent } from './components/card/card.component';
import { FavoritesComponent } from './page/favorites/favorites.component';
import { PaginatorComponent } from './components/paginator/paginator.component';
import { DetailsComponent } from './page/details/details.component';
import { ListGroupComponent } from './components/list-group/list-group.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
    CardComponent,
    FavoritesComponent,
    PaginatorComponent,
    DetailsComponent,
    ListGroupComponent
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
    CharactersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
