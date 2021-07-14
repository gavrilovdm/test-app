import {Component, Inject, OnInit} from '@angular/core'
import {FormControl, FormGroup, Validators} from '@angular/forms'
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog'
import {CategoryInterface} from '../category.interface'
import {ProductInterface} from '../product.interface'
import * as moment from 'moment'

@Component({
    template: `
        <mat-dialog-content [formGroup]="form" class="dialog">
            <mat-form-field class="w-100" appearance="legacy">
                <input matInput formControlName="title" autocomplete="off" type="text">
                <mat-error>Введите название</mat-error>
                <mat-label>Название</mat-label>
            </mat-form-field>
            <mat-form-field class="w-100" appearance="legacy">
                <input matInput formControlName="price" autocomplete="off" type="number">
                <mat-error>Укажите цену</mat-error>
                <mat-label>Цена</mat-label>
            </mat-form-field>
            <mat-form-field class="w-100" appearance="legacy">
                <input matInput formControlName="expiryDate"
                       autocomplete="off"
                       type="text"
                       #expiryDatePickerInput
                       [matDatepicker]="expiryDatePicker"
                       (focus)="expiryDatePicker.open()"
                       [ngClass]="{'error': form.controls.expiryDate.invalid && form.controls.expiryDate.touched}">
                <mat-datepicker #expiryDatePicker (closed)="expiryDatePickerInput.blur()"></mat-datepicker>
                <mat-error>Укажите срок годности</mat-error>
                <mat-label>Срок годности</mat-label>
            </mat-form-field>
            <mat-form-field appearance="legacy">
                <mat-select formControlName="category">
                    <mat-option *ngFor="let category of data.categories" [value]="category.title">
                        {{category.title}}
                    </mat-option>
                </mat-select>
                <mat-label>Категория</mat-label>
            </mat-form-field>
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
        title: new FormControl(null, [
            Validators.required,
            Validators.minLength(5),
            Validators.maxLength(40)
        ]),
        price: new FormControl(null, [
            Validators.required,
            Validators.min(1)
        ]),
        expiryDate: new FormControl(null, [
            Validators.required,
            this.dateValidator
        ]),
        category: new FormControl(null)
    })

    constructor(
        @Inject(MAT_DIALOG_DATA) public data: {
            item: ProductInterface,
            categories: CategoryInterface
        },
        private dialog: MatDialogRef<ProductInterface>,
    ) {
    }

    ngOnInit(): void {
        /*
        * Set form values
        * */
        this.form.patchValue({
            title: this.data.item?.title ? this.data.item.title : null,
            price: this.data.item?.price ? this.data.item.price : null,
            expiryDate: this.data?.item.expiryDate ? this.data.item.expiryDate : null,
            category: this.data.item.category ? this.data.item.category : null,
        })
        /*
        * Set file (img) options
        * */
    }

    save(): void {
        this.form.markAllAsTouched()
        if (this.form.invalid) return

        /*
        * Output data to parent component
        * */
        this.dialog.close({...this.data.item, ...this.form.value})
    }

    dateValidator(control: FormControl): { [s: string]: boolean } {
        if (control.value) {
            const date = moment(control.value)
            const tomorrow = moment().add(1, 'days')
            if (date.isBefore(tomorrow)) {
                return {invalidDate: true}
            }
        }
        return null
    }
}
