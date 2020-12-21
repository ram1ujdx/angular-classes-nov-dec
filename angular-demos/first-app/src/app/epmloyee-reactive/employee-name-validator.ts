import { AbstractControl } from "@angular/forms";

export function forbiddenNameValidator(control:AbstractControl):{[key:string]:any}|null{
    let forbidden=/kill/.test(control.value);
    return forbidden?{'forbiddenName':{value:control.value}}:null;
}