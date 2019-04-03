import { Validators } from '@angular/forms';



export class FormConfig {
    static getAddProductConfig() {
        return {
            productName : [null, [Validators.required]]
        }
    }
}