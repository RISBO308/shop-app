import { Component, signal, effect } from '@angular/core';
import { ProductItem } from '../product-item/product-item';
import { Product } from '../../../models/product.models';
@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [ProductItem],
  templateUrl: './product-list.html',
  styleUrl: './product-list.css',
})
export class ProductList {
  products = signal<Product[]>([
    {id:1,name:'Montre Cartier Santos-Dumont – Édition Limitée Laque Noire & Cuir', price: 60000, soldPrice: 57000, image: 'assets/images/products/Cartier.jpg', description: "Un chef-d'œuvre de sophistication et de minimalisme. Cette déclinaison rare de l'historique Cartier Santos-Dumont se pare d'un boîtier en acier rehaussé de laque noire précieuse. Son cadran noir profond est texturé de fines lignes géométriques et contrasté par d'élégants chiffres romains argentés. Montée sur un bracelet en cuir d'alligator noir brillant et finalisée par une couronne sertie d'un cabochon bleu, elle est l'accessoire ultime du gentleman moderne." },
    {id:2,name:'Montre Audemars Piguet Royal Oak – Cadran Blanc "Grande Tapisserie"', price: 80000, soldPrice: 76000, image: 'assets/images/products/Audemars Piguet.jpg', description: "Le sommet du design horloger moderne. Cette montre arbore la légendaire lunette octogonale à vis apparentes et un boîtier en acier inoxydable aux finitions brossées et polies d'une précision chirurgicale. Son cadran blanc argenté se pare du motif exclusif Grande Tapisserie, apportant un relief et une texture uniques. Son bracelet intégré épouse parfaitement les lignes du poignet pour un look à la fois sportif, chic et résolument prestigieux." },
    {id:3,name:'LOUVOND Modèl Royal PRX avec lunette cannelée', price: 40000, soldPrice: 38000, image: 'assets/images/products/montre louvond.jpg', description: "Affirmez votre style au quotidien avec cette montre chronographe pour homme, conçue pour allier sophistication et fonctionnalité. Son design épuré associe la modernité d'un boîtier en acier inoxydable au charme authentique d'un bracelet en cuir marron surpiqué." },
    {id:4,name:'Montre de Luxe Rolex Datejust 41 – Cadran Bleu Azur & Lunette Cannelée', price: 75000, soldPrice: 71000, image: 'assets/images/products/Rolex oyster perpetual date-just.jpg', description:"Incarnez l'élégance intemporelle avec cette superbe réinterprétation de la classique Rolex Datejust. Ce modèle se distingue par son cadran bleu soleillé captivant, qui change de nuance selon la lumière. Elle est équipée d'une lunette cannelée en acier et du célèbre bracelet Jubilee à cinq mailles, offrant un confort absolu au poignet et un éclat incomparable. Une icône de style indispensable, dotée de la célèbre loupe Cyclope à 3 heures pour une lecture parfaite de la date."  },
    {id:5,name:'Montre D1 Milano Polycarbon – Design Minimaliste "Shadow Black', price: 52000, soldPrice: 49500, image: 'assets/images/products/D1 milano.jpg', description:"Le minimalisme urbain poussé à son paroxysme. Cette montre monochrome propose un look Full Black mat extrêmement moderne. Conçue avec un boîtier et un bracelet en polycarbonate ultra-léger au toucher doux, elle garantit une légèreté et une résistance exceptionnelles au quotidien. Son cadran épuré et ses lignes angulaires inspirées de la haute horlogerie en font l'accessoire idéal pour les amateurs de mode contemporaine et de design furtif."  },
    {id:6,name:'Montre de Prestige Rolex Day-Date 40 – Or Jaune 18K & Chiffres Romains', price: 45000, soldPrice: 42500, image: 'assets/images/products/rolex.jpg', description:"Surnommée la montre des présidents, la Rolex Day-Date est le symbole absolu du succès et du raffinement. Entièrement façonnée dans un style or jaune éclatant, elle arbore une lunette cannelée et le prestigieux bracelet President à trois mailles semi-circulaires. Son cadran blanc épuré est sublimé par des chiffres romains dorés, affichant instantanément la date à 3 heures et le jour de la semaine en toutes lettres à midi. Un investissement de style intemporel."  }, 
    {id:7,name:'Montre Homme Casio MTP-VT01L-1B – Design Épuré Cadran Noir & Bracelet Cuir', price: 37000, soldPrice: 35150, image: 'assets/images/products/montre Casio.jpg', description:"Adoptez l'élégance du minimalisme avec la montre Casio MTP-VT01L-1B. Ce garde-temps se distingue par son cadran d'un noir profond, sublimé par de fines aiguilles et des index dorés. L'alliance subtile des chiffres romains à XII et VI heures apporte une touche classique et raffinée à ce design résolument contemporain. Équipée d'un boîtier en acier argenté de 40 mm et d'un bracelet en cuir noir façon crocodile, cette montre polyvalente s'accorde aussi bien avec un costume élégant qu'avec une tenue décontractée. Un essentiel intemporel signé Casio, alliant robustesse et sobriété pour le quotidien.."  }, 
    {id:8,name:'Montre Homme/Femme "Iced Out" Luxe – Boîtier & Bracelet Pavés de Strass Argentés', price: 30000, soldPrice: 28500, image: 'assets/images/products/Montre diamant.jpg', description:"Faites sensation avec cette montre au design Iced Out inspiré de la haute horlogerie urbaine. Entièrement recouverte de strass scintillants, elle capte la lumière sous tous les angles pour offrir un look luxueux, audacieux et résolument modern."  }
  ]);


  constructor() {
    // Ce log s'exécutera à TOUS les changements du signal
    effect(() => {
      console.log('Valeur actuelle du Signal :', this.products());
    });
  }
// products: any;
}
