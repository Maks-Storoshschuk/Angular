import {Pipe, PipeTransform} from '@angular/core';
import {IUser} from "../interfaces";

@Pipe({
  name: 'transformator'
})
export class TransformatorPipe implements PipeTransform {

  transform(value: IUser, ...args: unknown[]): string {
    return (`${value.id}). ${value.name} - ${value.email} `)
  }

}
