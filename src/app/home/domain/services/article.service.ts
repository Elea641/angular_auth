import { Injectable } from '@angular/core';
import {ApiService} from "../../../auth/domain/services/api.service";
import {Observable, tap} from "rxjs";
import {Article} from "../models/Article";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: Article[] = [];
  constructor(private apiService: ApiService) { }

  getAllArticles(): Observable<Article[]> {
    return this.apiService.get<Article[]>('articles').pipe(
        tap(response => this.articles = response)
    )
  }
}
