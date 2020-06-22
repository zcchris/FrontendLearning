import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myPipe',
})
export class MyPipePipe implements PipeTransform {
  transform(value: string): unknown {
    return value.charAt(0).toUpperCase + value.substr(1);
  }
}
