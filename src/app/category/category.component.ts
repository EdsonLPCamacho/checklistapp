import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { Category } from '../_models/category';
import { RouterModule, Route } from '@angular/router';

export const CATEGORY_DATA = [

  { name: "Education", guid: 'aaa-bbb-ccc-dddd'},
  { name: "Health", guid: 'aaa-bbb-ccc-dddd'},
  { name: "Job", guid: 'aaa-bbb-ccc-dddd'},
  { name: "Other", guid: 'aaa-bbb-ccc-dddd'},

];

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [
    
    MaterialModule,
    RouterModule
    
  ],

  templateUrl: './category.component.html',
  styleUrl: './category.component.css'

})
export class CategoryComponent {

  public editCategory(arg0: any) {

  throw new Error('Method not implemented.');
  console.log('Category edited');

  }

  public deleteCategory(arg0: any) {
  throw new Error('Method not implemented.');
  console.log('Category deleted');
  }

  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = CATEGORY_DATA;
  element: any;

  public createNewCategory(){
    
    console.log('Category Created');

  }

 

}
