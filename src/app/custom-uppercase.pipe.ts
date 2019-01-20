import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customUppercase'
})
export class CustomUppercasePipe implements PipeTransform {

  transform(value: string, ...tutti): any {
    console.log(tutti);
    return value.toUpperCase();
  }

}
