import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { response } from 'express';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  constructor(private httpClient: HttpClient){

  }

  ngOnInit():void{
    this.getProducts();
  }

  getProducts(){
    const response = this.httpClient.get("https://api.escuelajs.co/api/v1/products").subscribe
    (Response =>{console.log(response)});
  }

}
