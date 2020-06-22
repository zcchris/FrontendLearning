import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myuppercase',
})
export class UppercasePipe implements PipeTransform {
  transform(value: string): string {
    return '卧槽' + value.toUpperCase();
  }
}
