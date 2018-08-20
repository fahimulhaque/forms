import { AbstractControl, ValidationErrors } from '@angular/forms';
import { Observable } from 'rxjs';
import { promise } from '../../../node_modules/protractor';


export class UsernameValidators {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {return {cannotContainSpace : true  }; }
        return null;
    }

    static shouldBeUnique(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve , reject) => {
            setTimeout(() => {
                if (control.value === 'Fahimul') {
                    resolve({ shouldBeUnique : true });
                } else { resolve(null); }
            }, 2000);
        });
    }
}
