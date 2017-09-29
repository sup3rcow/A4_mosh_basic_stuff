import { AbstractControl, ValidationErrors } from '@angular/forms';

export class UsernameValidators {
    static cannotContainSpace (control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(' ') >= 0) {
            return { cannotContainSpace: true};

// da je npr minlength validacicja vratio bi komplex object sa detaljima o grešci:
// return objekt vidi *ngIf kod validiranja
// return {minlength:{requiredLength: 10, actualLength: control.value.length}}
        }
        return null;
    }

    static isUsernameNotUnique (control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).toLowerCase() === 'mosh') {
            return { isUsernameNotUnique: true };
        }
        return null;
    }
}
