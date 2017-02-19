import { FormControl } from '@angular/forms';

export class CustomValidators {

    /**
     * Function to control email with custom validator
     *
     * @param control
     *
     * @returns {{capEmail: boolean}}
     */
    static capEmail(control: FormControl) {
        // email regex
        const regex = /^(\w+\.\w+)+@capgemini\.com$/;

        // returns control
        return regex.test(control.value) ? null : {
            capEmail: true
        }
    }
}
