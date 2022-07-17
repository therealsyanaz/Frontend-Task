import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringPipe'
})
export class StringPipePipe implements PipeTransform {

  transform(text: string, length: number = 25, suffix: string = '...'): string {
    if (text.length > length) {
      let truncated: string = text.substring(0, length).trim() + suffix;
      return truncated;
    }

    return text;
  }

}
