import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-productitem',
  templateUrl: './productitem.html',
  styleUrls: ['./productitem.css']
})
export class Productitem {

  @Input()
  product: any;

}