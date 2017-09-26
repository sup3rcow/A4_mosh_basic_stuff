import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleCase'
})
export class TitleCasePipe implements PipeTransform {

  transform(value: string): string {
    if (!value) {
      return null;
    }

    const words = value.split(' ');
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      if (i > 0 && this.isPreposition(word)) {
        words[i] = word.toLowerCase();
      } else {
        words[i] = this.titleCase(word);
      }
    }
    return words.join(' ');
  }

  private isPreposition(word: string): boolean {
    const prepositions = ['of', 'the'];
    return prepositions.includes(word.toLocaleLowerCase());
  }

  private titleCase(word: string): string {
    return word.substr(0, 1).toUpperCase() + word.substr(1).toLocaleLowerCase();
  }
}
