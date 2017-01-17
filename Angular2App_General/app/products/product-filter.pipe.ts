import { PipeTransform,Pipe } from '@angular/core';
import { IProduct} from './product';

@Pipe({
    name: 'productFilter'
})

export class ProductFilterPipe implements PipeTransform {
  transform(productList: IProduct[], inputString: string[]):IProduct[] {

    let filterString = inputString[0] ? inputString[0].toLowerCase() : null;

    return filterString ? productList.filter((item) => {
       return item.productName.toLowerCase().indexOf(filterString) !== -1;
    }): productList;
  }
}