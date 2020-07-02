import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'ifIsEmpty',
})
export class IfIsEmptyPipe implements PipeTransform {
  transform(value: string, ...args: string[]): string {
    return value.length === 0 ? '...' : value;
  }
}
