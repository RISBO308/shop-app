import { Component } from '@angular/core';
import { ProductList } from '../product-list/product-list';

@Component({
  selector: 'app-container',
  imports: [ProductList],
  templateUrl: './container.html',
  styleUrls: ['./container.css'],
})
export class Container {}
