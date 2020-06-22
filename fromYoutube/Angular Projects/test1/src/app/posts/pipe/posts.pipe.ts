import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'posts'
})
export class PostsPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
