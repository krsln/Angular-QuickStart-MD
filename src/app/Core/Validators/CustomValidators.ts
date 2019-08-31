import {FormControl} from '@angular/forms';
import {Observable} from 'rxjs';

export class CustomValidators {
  public static forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'test@test.com') {
          resolve({emailIsForbidden: true});
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }

  public static forbiddenNames(control: FormControl): { [s: string]: boolean } {
    const ForbiddenNames = ['Holy', 'Shit'];

    if (control.value) {
      if (!ForbiddenNames.indexOf(control.value)) {
        return {nameIsForbidden: true};
      }
    }
    return null;
  }
}
