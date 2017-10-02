
import { AbstractControl, ValidationErrors } from '@angular/forms';

export class PasswordValidators {
    static isOldPasswordInvalid (control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((control.value as string) !== '123') {
                    resolve({ isOldPasswordInvalid: true});
                } else {
                    resolve(null);
                }
            }, 2000);
        });
    }

    static passwordsShouldMatch (control: AbstractControl): ValidationErrors | null {
        const newPassword = control.get('newPassword');
        const confirmPassword = control.get('confirmPassword');
        if (newPassword.value !== confirmPassword.value) {
            return { passwordsShouldMatch: true };
        }


        // static cannotContainSpace (control: AbstractControl): ValidationErrors | null {
        //     if ((control.value as string).indexOf(' ') >= 0) {
        //         return { cannotContainSpace: true};

// da je npr minlength validacicja vratio bi komplex object sa detaljima o grešci:
// return objekt vidi *ngIf kod validiranja
// return {minlength:{requiredLength: 10, actualLength: control.value.length}}

        return null;
    }
}

