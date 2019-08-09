import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'Truncate'
})
export class TruncatePipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
    if (value) {
      const limit = args.length > 0 ? parseInt(args[0], 10) : 50;
      const trail = args.length > 1 ? args[1] : ' ...';
      return value.length > limit ? value.substring(0, limit) + trail : value;
    }
    return value;
  }
}

/* Usage
* | Truncate:40:'...:p'
* | Truncate:40
* | Truncate
* */
