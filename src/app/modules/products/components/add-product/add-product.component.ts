import { Component, OnInit } from '@angular/core';
import { FormConfig } from '../../formConfigs/formConfig';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.sass']
})
export class AddProductComponent implements OnInit {

  addProductConfig = null;
  addProductForm: FormGroup = null;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.addProductConfig = FormConfig.getAddProductConfig();
    this.addProductForm = this.fb.group(this.addProductConfig);
    this.addProductForm.valueChanges.subscribe((data)=>{
      console.log(data,this.addProductForm);
    })
  }

}
