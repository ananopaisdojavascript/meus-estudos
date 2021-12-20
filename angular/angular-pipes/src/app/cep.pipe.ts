import { Pipe, PipeTransform } from '@angular/core';

// Parâmetro obrigatório para acessar o pipe em outras partes do aplicativo
@Pipe({
  name: 'cep'
})
export class CepPipe implements PipeTransform {

  transform(cep: string) {
    if(cep.length === 8) {
      return `${cep.substring(0, 5)}-${cep.substring(5)}`
    } else {
      return cep;
    }
  }

}
