import { Pipe, PipeTransform } from '@angular/core';
import { Post } from '../../core/interface';

@Pipe({
  name: 'my',
})
export class MyPipe implements PipeTransform {
  transform(value: Post): string {
    return `${value.id}, ${value.body}`;
  }
}
