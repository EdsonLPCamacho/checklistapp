import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-category-form',
  standalone: true,
  imports: [ 
    MaterialModule,
    ReactiveFormsModule
  ],
  templateUrl: './category-form.component.html',
  styleUrl: './category-form.component.css'
})
export class CategoryFormComponent {

  public actionName = "Edit";
  public categoryForm: FormGroup;

  constructor(private formBuilder: FormBuilder){

    this.categoryForm = this.formBuilder.group({})

  }


  public cancel(){
    console.log("Edited")
  }

  public save(){
    console.log("Saved")
  }

}
