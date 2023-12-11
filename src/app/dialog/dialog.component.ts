import { Component, Inject } from '@angular/core';
import { MaterialModule } from '../material.module';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  standalone: true,
  
  imports: [
    MaterialModule
  ],

  templateUrl: './dialog.component.html',
  styleUrl: './dialog.component.css'
})
export class DialogComponent {

  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {

      if(data.leftButtonLabel != null){
        this.leftButtonLabel = data.leftButtonLabel;
      }

      if(data.rightButtonLabel != null){
        this.rightButtonLabel = data.rightButtonLabel;
      }

      if(data.dialogMsg != null){
        this.dialogMsg = data.dialogMsg;
      } 
  }

  public dialogMsg='Warning: Do you want to continue?';
  public leftButtonLabel ='No';
  public rightButtonLabel = 'Yes';

  public clickleftButton(){
    this.dialogRef.close(false); 
  }

  public clickrightButton(){
    this.dialogRef.close(true);    
  }

}
