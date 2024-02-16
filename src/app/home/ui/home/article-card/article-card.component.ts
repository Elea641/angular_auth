import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Article} from "../../../domain/models/Article";
import {ArticleService} from "../../../domain/services/article.service";
import {MatGridListModule} from "@angular/material/grid-list";
import {MatCardModule} from "@angular/material/card";
import {MatButtonModule} from "@angular/material/button";

@Component({
  selector: 'app-article-card',
  standalone: true,
  imports: [CommonModule, MatGridListModule, MatCardModule, MatButtonModule],
  templateUrl: './article-card.component.html',
  styleUrls: ['./article-card.component.css']
})
export class ArticleCardComponent {
  articles: Article[] = [];

  constructor(private articleService: ArticleService) {}

  ngOnInit(): void {
    this.articleService.getAllArticles().subscribe((response) => this.articles = response)
  }
}
