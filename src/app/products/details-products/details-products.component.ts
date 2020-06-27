import { Component, OnInit } from '@angular/core';
import{ActivatedRoute} from '@angular/router';
import{DataService} from '../../shared/data.service';
import{ Location} from '@angular/common';
//import { from } from 'rxjs';
@Component({
  selector: 'app-details-products',
  templateUrl: './details-products.component.html',
  styleUrls: ['./details-products.component.scss']
})
export class DetailsProductsComponent implements OnInit {

  public product: any = {};
  
   

  
  constructor( private route: ActivatedRoute, 
    private dataSvc: DataService,
    private location: Location) { }

  ngOnInit(): void { 
    const productId = this.route.snapshot.paramMap.get('id');
    [this.product] = this.dataSvc.getProductById(productId);
  }

  onGoBack(): void{
    this.location.back();
  }
}
