import {Component, Inject} from '@angular/core'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'

@Component({
  template: `
    <h1 mat-dialog-title>{{data.title}}</h1>
    <div mat-dialog-actions>
      <button mat-button (click)="close()">Отмена</button>
      <button mat-button color="primary" (click)="close(true)" cdkFocusInitial>Да</button>
    </div>
  `
})
export class AgreeDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: {title: string},
    public dialogRef: MatDialogRef<AgreeDialogComponent>
  ) {
  }

  close(result?: boolean): void {
    this.dialogRef.close(result)
  }
}
