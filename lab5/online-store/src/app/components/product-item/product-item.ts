import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';

@Component({
  selector: 'app-product-item',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-item.html',
  styleUrls: ['./product-item.css']
})
export class ProductItem {

  @Input() product!: Product;
  @Output() delete = new EventEmitter<number>();

  currentImageIndex = 0;

  like() {
    this.product.likes++;
  }

  deleteProduct() {
    if (confirm('Are you sure?')) {
      this.delete.emit(this.product.id);
    }
  }

  nextImage() {
    this.currentImageIndex =
      (this.currentImageIndex + 1) % this.product.images.length;
  }

  // ⬅ PREVIOUS IMAGE
  prevImage() {
    this.currentImageIndex =
      (this.currentImageIndex - 1 + this.product.images.length)
      % this.product.images.length;
  }

  // 🖼 SELECT IMAGE BY CLICK
  selectImage(index: number) {
    this.currentImageIndex = index;
  }

  shareWhatsApp() {
    const url = encodeURIComponent(this.product.link);
    window.open(`https://wa.me/?text=${url}`, '_blank');
  }
}
