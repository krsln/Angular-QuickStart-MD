import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name: 'FileSize'})
export class FileSizePipe implements PipeTransform {
  transform(size: number, extension: string = 'MB') {
    return (size / (1024 * 1024)).toFixed(2) + extension;
  }
}

/* Usage
<!-- 2.02megabyte -->
{{ file.size | FileSize:'megabyte' }}
* */
