import { Component, OnInit } from '@angular/core';
import { EVENT_MANAGER_PLUGINS } from '@angular/platform-browser';
import{DataService} from '../../shared/data.service';
import { Data } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {


  public products = [];
  constructor(private dataSvc: DataService) { }

  ngOnInit(): void {
    this.products = this.dataSvc.getAllProducts();
  }

}
