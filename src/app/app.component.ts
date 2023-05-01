import { Component } from '@angular/core';

export interface PeriodicElement {
  name: string;
  username:string;
  gender:string;
  password:number; 
  birthday:any;
  email: string;
  city: string;
  cityCity: string;
}
const ELEMENT_DATA: PeriodicElement[] = [
  // {password: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  // {password: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  // {password: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  // {password: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  // {password: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  // {password: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  // {password: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  // {password: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  // {password: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  // {password: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
  {name: "علی" ,username: 'ali-11' , gender: 'مرد' , password:45487156, birthday:2005-11-15,email:"ali@gmail.com",city:"تهران",cityCity:"تهران"},
  {name: "رضا" ,username: 'reza-54' , gender: "مرد", password: 121251415,birthday:2003-10-10,email:"reza@gmail.com",city:"آذربایجان شرقی ",cityCity:"تبریز"},
  {name: "رضا" ,username: 'reza-54' , gender: "مرد", password: 121251415,birthday:2003-10-10,email:"reza@gmail.com",city:"آذربایجان شرقی ",cityCity:"تبریز"},
  {name: "میترا" ,username: 'mitra-658' , gender: "زن", password: 121251415,birthday:2003-10-10,email:"reza@gmail.com",city:"آذربایجان شرقی ",cityCity:"تبریز"},
  {name: "رضا" ,username: 'reza-54' , gender: "مرد", password: 121251415,birthday:2003-10-10,email:"reza@gmail.com",city:"آذربایجان شرقی ",cityCity:"تبریز"},
  {name: "عطیه" ,username: 'atiyeh-54' , gender: "زن", password: 121251415,birthday:2003-10-10,email:"reza@gmail.com",city:"آذربایجان شرقی ",cityCity:"تبریز"},
  {name: "رضا" ,username: 'reza-54' , gender: "مرد", password: 121251415,birthday:2003-10-10,email:"reza@gmail.com",city:"آذربایجان شرقی ",cityCity:"تبریز"},
  {name: "رضا" ,username: 'reza-54' , gender: "مرد", password: 121251415,birthday:2003-10-10,email:"reza@gmail.com",city:"آذربایجان شرقی ",cityCity:"تبریز"},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
 
})
export class AppComponent {
  displayedColumns: string[] = ['name', 'username', 'gender', 'password','birthday','email','city','cityCity'];
   dataSource = ELEMENT_DATA;
 
 
}



