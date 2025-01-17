import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordlimit',
  standalone: true
})
export class WordlimitPipe implements PipeTransform {

  transform(value: string, wordlimit: number = 4): string {
    if (!value) return '';

    const words = value.split(' ');
    if (words.length > wordlimit) {
      return words.slice(0, wordlimit).join(' ') + '...';
    }
    
    return value;
  }

}
