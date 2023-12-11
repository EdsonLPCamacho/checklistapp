import { Component } from '@angular/core';
import { MaterialModule } from '../material.module';
import { RouterModule, Route } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { Category } from '../_models/category';
import { CategoryEditComponent } from '../category-edit/category-edit.component';

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
    RouterModule,        
  ],


  templateUrl: './category.component.html',
  styleUrl: './category.component.css'

})


export class CategoryComponent {

  public displayedColumns: string[] = ['id', 'name', 'actions'];
  public dataSource: Category[] = CATEGORY_DATA;
  element: any;
  //Category: Category;

  constructor(private dialog: MatDialog){}

  public editCategory(category: Category) {

    this.dialog.open(CategoryEditComponent, {
      disableClose: true, 
      data:{
        dialogMsg: 'Do you want to delete the category?',
        leftButtonLabel: 'No',
        rightButtonLabel: 'Yes'
      }
    }).afterClosed().subscribe(
        resp=>{
          if(resp){ 
            console.log('Category deleted!');
          }else{
            console.log('Action not completed!');
          }
      }
    );

  }

  public deleteCategory(inputCategory: Category) {
  
    this.dialog.open(CategoryEditComponent, {
      disableClose: true, 
      data:{
        dialogMsg: 'Do you want to delete the category?',
        leftButtonLabel: 'No',
        rightButtonLabel: 'Yes'
      }
    }).afterClosed().subscribe(
        resp=>{
          if(resp){ 
            console.log('Category deleted!');
          }else{
            console.log('Action not completed!');
          }
      }
    );

  }

  public createNewCategory(category: Category){
    
    console.log('Category Created');

  }

  

}
