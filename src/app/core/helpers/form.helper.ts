import { AbstractControl, FormArray, FormControl, FormGroup } from '@angular/forms';
import { Debug } from './debug.helper';

const debug = Debug.extend('FormHelper');

export const FormHelper = {
  forEachControl(ctrl: AbstractControl, callback: (ctrl: FormControl) => void) {
    let done = false;
    if (ctrl instanceof FormControl) {
      callback(ctrl);

      done = true;
    } else if (ctrl instanceof FormGroup) {
      for (const p in ctrl.controls) {
        this.forEachControl(ctrl.controls[p], callback);
      }

      done = true;
    } else if (ctrl instanceof FormArray) {
      for (const v of ctrl.controls) {
        this.forEachControl(v, callback);
      }

      done = true;
    }

    if (!done) {
      debug(`Unimplemented forEachControl for control %o`, ctrl);
    }
  },

  /**
   * Return true if a control has an error and touch them
   * @param ctrl {AbstractControl} Control to check
   * @param prop {string} String to identify where's the error in console
   */
  markErrors(ctrl: AbstractControl, prop?: string): boolean {
    let errors = false;

    if (ctrl.errors) {
      ctrl.markAsTouched();
      debug(
        'Control %c%s%c has the following errors: %o',
        'color: #0BB',
        prop,
        'color: initial',
        ctrl.errors,
      );

      errors = true;
    }

    if (ctrl instanceof FormGroup) {
      for (const ctrlProp in ctrl.controls) {
        const ret = this.markErrors(
          ctrl.controls[ctrlProp],
          prop ? `${prop}.${ctrlProp}` : ctrlProp,
        );

        if (ret) {
          errors = true;
        }
      }
    } else if (ctrl instanceof FormArray) {
      for (let i = 0; i < ctrl.controls.length; ++i) {
        const ret = this.markErrors(ctrl.controls[i], prop ? `${prop}[${i}]` : `[${i}]`);

        if (ret) {
          errors = true;
        }
      }
    } else if (!(ctrl instanceof FormControl)) {
      debug('Unimplemented control check for %o', ctrl);
    }

    return errors;
  },
};
