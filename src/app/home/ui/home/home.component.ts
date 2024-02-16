import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ArticleCardComponent} from "./article-card/article-card.component";

@Component({
  selector: 'app-home',
  standalone: true,
    imports: [CommonModule, ArticleCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

}
