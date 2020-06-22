import { Pipe, PipeTransform } from '@angular/core';
import { stringify } from 'querystring';

@Pipe({
  name: 'myPipe',
})
export class MyPipePipe implements PipeTransform {
  transform(value: string): string {
    return value.toUpperCase();
  }
}

@Pipe({
  name: 'pipeWithParams',
})
export class PipeWithParams implements PipeTransform {
  transform(v: string, before: string, after: string) {
    const res = `${before} ${v} ${after}`;
    return res;
  }
}
