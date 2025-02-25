import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'card'
})
export class CardPipe implements PipeTransform {

  transform(value: number): string {
    let target:string = String(value);
    
    return target.slice(0,4) + "-" + target.slice(4,8) + "-" + target.slice(8,12) + "-" + target.slice(12,) ;
  }

}
