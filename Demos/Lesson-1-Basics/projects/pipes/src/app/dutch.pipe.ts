import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dutch'
})
export class DutchPipe implements PipeTransform {

  transform(value: any, args: any, extra:string): any 
  {
    return ("" + value).replace(/[,]/gi, '').replace(/[.]/gi, args[0]) + extra;
  }

}
