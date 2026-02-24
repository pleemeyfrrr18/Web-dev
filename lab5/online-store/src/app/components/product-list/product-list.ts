import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../models/product.model';
import { ProductItem } from '../product-item/product-item';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule, ProductItem],
  templateUrl: './product-list.html',
})
export class ProductList {

  @Input() products: Product[] = [];

  deleteProduct(productId: number) {
    this.products = this.products.filter(p => p.id !== productId);
  }
}
