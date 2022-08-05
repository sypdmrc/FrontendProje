import { Pipe, PipeTransform } from '@angular/core';
import { Product } from '../models/product';

@Pipe({
  name: 'productFilter'
})
export class ProductFilterPipe implements PipeTransform {

  transform(filteredProducts: Product[], filterProducts:string): Product[] {
    filterProducts = filterProducts.toLowerCase();
    if(!filterProducts) return filteredProducts;
    return filteredProducts.filter(p=>p.name.toLowerCase().indexOf(filterProducts) !==-1);
  }

}
