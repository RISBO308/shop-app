import { Component } from '@angular/core';
import { Productitem } from '../productitem/productitem';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  imports: [Productitem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})

export class ProductList{
  products: Product[] = [
    {id: 1, name: 'polo lacoste', price: '10000XAF', image: 'assets/images/products/polo lacoste.jpg'},
    {id: 2, name: 'polo noname marron', price: '7000XAF', image: 'assets/images/products/polo 1.jpg'},
    {id: 3, name: 'robe de soirée' , price: '20 000XAF', image:'assets/images/products/robe 1.jpeg'},
    {id: 4,name: 'babouche de marque pedro', price: '15 000XAF', image:'assets/images/products/babouche pedro.jpg'},
    
  ]
}

