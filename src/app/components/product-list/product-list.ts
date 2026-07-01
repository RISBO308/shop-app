import { Component, signal,input } from '@angular/core';
import { Productitem } from '../productitem/productitem';
import { Product } from '../../models/product'; 
import { CurrencyPipe } from '@angular/common';
@Component({
  selector: 'app-product-list',
  imports: [Productitem, CurrencyPipe],
  templateUrl: './product-list.html',
  styleUrls: ['./product-list.css'],
})

export class ProductList{
  products = signal<Product[]>([
    {id: 1, 
      name:   'polo lacoste',
       price: 10000,
        image: 'assets/images/products/polo lacoste.jpg',
      description: 'polo lacoste de couleurs rouge, blanche et vert olive avec un logo brodé sur le côté gauche de la poitrine',
      soldprice: 8000,
      regularprice: 10000
      },

    {id: 2,
       name: 'polo noname marron', 
       price: 7000, 
       image: 'assets/images/products/polo 1.jpg',
       description: 'polo noname de couleur marron avec un logo brodé sur le côté gauche de la poitrine',
       soldprice: 5000,
       regularprice: 7000
       },
    {id: 3, 
      name: 'pull bleu marine' ,
       price: 6000,
        image:'assets/images/products/pull stylé bleu marine.jpg',
        description: 'pull bleu marine de marque ralph laurent avec un logo brodé sur le côté gauche de la poitrine',
        soldprice: 4000,
        regularprice: 6000
      },
    {id: 4,
      name: 'babouche de marque pedro',
       price: 15000,
        image:'assets/images/products/babouche pedro.jpg',
        description: 'babouche de marque pedro de couleur marron avec une boucle sur le dessus de la chaussure',
        soldprice: 12000,
        regularprice: 15000
      },

      {
        id: 5,
        name: 'samara blanche-noire',
        price: 15000,
        image:'assets/images/products/samara blanche-noire.jpg',
        description: 'babouche ouverte de couleur blanche avec des motifs noirs sur le dessus de la chaussure',
        soldprice: 10000,
        regularprice: 12000
      },
      {
        id: 6,
        name: 'tshirt noname blanc',
        price: 4000,
        image:'assets/images/products/tshirt noname blanc.jpg',
        description: 'tshirt de couleur blanche sans motifs ni logo sur le devant',
        soldprice: 3000,
        regularprice: 4000
      },
      {
        id: 7,
        name: 'robe de soirée rouge',
        price: 25000,
        image:'assets/images/products/robe 2.jpeg',
        description: 'robe de soirée de couleur rouge',
        soldprice: 20000,
        regularprice: 25000
      }
    
   ])
  
}

