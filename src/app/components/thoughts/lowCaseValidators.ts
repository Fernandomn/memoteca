import { AbstractControl } from '@angular/forms';

export function lowCaseValidator(control: AbstractControl) {
  const author = control.value as string;
  if (author !== author?.toLowerCase()) {
    return { lowCase: true };
  } else return null;
}
