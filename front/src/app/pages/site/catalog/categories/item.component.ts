import {Component, Inject, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import {CategoryInterface} from '../category.interface'

@Component({
  template: `
    <mat-dialog-content [formGroup]="form" class="dialog">
      <mat-form-field class="w-100" appearance="legacy">
        <input matInput formControlName="title" autocomplete="off" type="text">
        <mat-error>Введите название</mat-error>
        <mat-label>Название</mat-label>
      </mat-form-field>
      <br>
      <p></p>
    </mat-dialog-content>
    <div mat-dialog-actions style="display: flex; justify-content: flex-end;">
      <button mat-button matDialogClose>Отмена</button>
      <button mat-button color="primary" cdkFocusInitial (click)="save()">Сохранить</button>
    </div>
  `
})
export class ItemComponent implements OnInit {
  form: FormGroup = new FormGroup({
    title: new FormControl(null, [Validators.required]),
  })

  constructor(
    @Inject(MAT_DIALOG_DATA) public data: CategoryInterface,
    private dialog: MatDialogRef<CategoryInterface>
  ) {
  }

  ngOnInit(): void {
    console.log(this.data)
    /*
    * Set form values
    * */
    this.form.patchValue({
      title: this.data?.title ? this.data.title : null,
    })
  }

  save(): void {
    this.form.markAllAsTouched()
    if (this.form.invalid) return

    /*
    * Output data to parent component
    * */
    this.dialog.close({...this.data, ...this.form.value})
  }
}
