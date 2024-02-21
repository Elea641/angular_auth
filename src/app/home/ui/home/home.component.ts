import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleCardComponent } from './article-card/article-card.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, ArticleCardComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  selectedFile!: File;
  img!: File;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    const config = {
      withCredentials: true,
    };
    this.http
      .get<File>(
        'http://localhost:8080/upload/files/11133487-ensemble-de-logo-d-athlete-en-cours-d-execution-competition-sportive-saine-parfait-pour-le-logo-de-l-entreprise-sportive-illustrationle-vectoriel.jpg',
        config
      )
      .subscribe((file: File) => {
        this.img = file;
        console.log('test', this.img);
      });
  }

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0] as File;
      console.log(this.selectedFile.name);
    }
  }

  onUpload(): void {
    const fd = new FormData();
    fd.append('file', this.selectedFile, this.selectedFile.name);
    const config = {
      withCredentials: true,
    };

    this.http
      .post('http://localhost:8080/upload', fd, config)
      .subscribe((file) => console.log(file));
  }
}
