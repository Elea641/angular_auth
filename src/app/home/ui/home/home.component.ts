import { Component } from '@angular/core';
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
export class HomeComponent {
  selectedFile!: File;

  constructor(private http: HttpClient) {}

  onFileSelected(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    if (inputElement.files && inputElement.files.length > 0) {
      this.selectedFile = inputElement.files[0] as File;
      console.log(this.selectedFile.name);
    }
  }

  onUpload(): void {
    console.log('test');

    const fd = new FormData();

    fd.append('file', this.selectedFile, this.selectedFile.name);

    const config = {
      withCredentials: true,
    };

    this.http.post('http://localhost:8080/upload', fd, config).subscribe();
  }
}
