import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-upload-merch',
  imports: [CommonModule, FormsModule],
  templateUrl: './upload-merch.component.html',
  styleUrls: ['./upload-merch.component.css']
})
export class UploadMerchComponent{
  showModal = true;
  title = '';
  price: number | null = null;
  imageFile: File | null = null;
  description = '';
  type = '';

  closeModal() {
    this.showModal = false;
  }

  onFileSelected(event: any) {
    this.imageFile = event.target.files[0];
  }

  submitForm() {
    if (this.imageFile && this.title && this.price !== null) {
      const formData = new FormData();
      formData.append('image', this.imageFile);
      formData.append('title', this.title);
      formData.append('price', this.price.toString());
      formData.append('description', this.description);
      formData.append('type', this.type);
    }
  }
}
