import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nome',
  // Vamos deixar esse pipe "inpuro" porque o valor de entrada interfere no resultado
  pure: false
})
export class NomePipe implements PipeTransform {

  transform(array: string[], separador: string) {
    return array.join(separador);
  }

}
