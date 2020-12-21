import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'email'
})
export class EmailPipe implements PipeTransform {

  transform(value: string, ...args: any[]): unknown {
    let length=args[0];
    if(length>value.length){
      return value;
    }
    return value.substr(0,length)+args[1];
  }

}
