import { Component } from '@angular/core';
import { List } from './interface/List-interface';
import { Products } from './interface/Products-interface';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'KSboy - Hello it my home!';
  student = {
    Name: 'Nguyễn Hoàng Duy Khang',
    img: 'jerry.jpg',
    Gender: 'Nam',
    Date_of_birth: '13/03/2004',
    Medium_score: 4.9,
  };

  InventorList: List[] = [
    {
      id: 1,
      first: 'Isaac',
      last: 'Newton',
      year: 1643,
      passed: 1727,
    },
    {
      id: 2,
      first: 'Albert',
      last: 'Einstein',
      year: 1879,
      passed: 1955,
    },
    {
      id: 3,
      first: 'Marie',
      last: 'Curie',
      year: 1867,
      passed: 1934,
    },
    {
      id: 4,
      first: 'Charles',
      last: 'Darwin',
      year: 1809,
      passed: 1882,
    },
    {
      id: 5,
      first: 'Nikola',
      last: 'Tesla',
      year: 1856,
      passed: 1943,
    },
    {
      id: 6,
      first: 'Galileo',
      last: 'Galilei',
      year: 1564,
      passed: 1642,
    },
    {
      id: 7,
      first: 'Leonardo',
      last: 'da Vinci',
      year: 1452,
      passed: 1519,
    },
    {
      id: 8,
      first: 'Ada',
      last: 'Lovelace',
      year: 1815,
      passed: 1852,
    },
    {
      id: 9,
      first: 'Stephen',
      last: 'Hawking',
      year: 1942,
      passed: 2018,
    },
    {
      id: 10,
      first: 'Alan',
      last: 'Turing',
      year: 1912,
      passed: 1954,
    },
  ];

  ProductList: Products[] = [
    {
      productId: 1,
      productName: 'Leaf Rake',
      productCode: 'GDN-0011',
      releaseDate: 'March 19, 2016',
      description: 'Leaf rake with 48-inch wooden handle.',
      price: 19.95,
      starRating: 3.2,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png',
    },
    {
      productId: 2,
      productName: 'Garden Cart',
      productCode: 'GDN-0023',
      releaseDate: 'March 18, 2016',
      description: '15 gallon capacity rolling garden cart',
      price: 32.99,
      starRating: 4.2,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png',
    },
    {
      productId: 5,
      productName: 'Hammer',
      productCode: 'TBX-0048',
      releaseDate: 'May 21, 2016',
      description: 'Curved claw steel hammer',
      price: 8.9,
      starRating: 4.8,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png',
    },
    {
      productId: 8,
      productName: 'Saw',
      productCode: 'TBX-0022',
      releaseDate: 'May 15, 2016',
      description: '15-inch steel blade hand saw',
      price: 11.55,
      starRating: 3.7,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/27070/egore911_saw.png',
    },
    {
      productId: 10,
      productName: 'Video Game Controller',
      productCode: 'GMG-0042',
      releaseDate: 'October 15, 2015',
      description: 'Standard two-button video game controller',
      price: 35.95,
      starRating: 4.6,
      imageUrl:
        'http://openclipart.org/image/300px/svg_to_png/120337/xbox-controller_01.png',
    },
  ];
}
