import { FormGroup } from "@angular/forms";



export const passwordMatchValidator = function(control: FormGroup) {
    let pswd = control.get('pass');
    let confirm = control.get('confirmPassword');
    // console.log(control);
    
    if(!pswd.value && !confirm.dirty && confirm.untouched){
      return null;
    }
    return (pswd.value === confirm.value) ? null : { 'mismatch': true };
}