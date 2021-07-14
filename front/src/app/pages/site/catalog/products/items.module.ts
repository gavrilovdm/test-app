import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {ItemsComponent} from './items.component'
import {MatDialogModule} from '@angular/material/dialog'
import {MatSnackBarModule} from '@angular/material/snack-bar'
import {MatListModule} from '@angular/material/list'
import {MatButtonModule} from '@angular/material/button'
import {MatIconModule} from '@angular/material/icon'
import {ReactiveFormsModule} from '@angular/forms'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {ItemComponent} from './item.component'
import {EditorModule} from '@tinymce/tinymce-angular'
import {MatSelectModule} from '@angular/material/select'
import {MatDatepickerModule} from '@angular/material/datepicker'
import {MAT_MOMENT_DATE_ADAPTER_OPTIONS, MatMomentDateModule} from '@angular/material-moment-adapter'

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild([
            {
                path: '',
                component: ItemsComponent
            }
        ]),
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatDialogModule,
        MatSnackBarModule,
        MatListModule,
        MatButtonModule,
        MatIconModule,
        EditorModule,
        MatSelectModule,
        MatDatepickerModule,
        MatMomentDateModule
    ],
    declarations: [
        ItemsComponent,
        ItemComponent
    ],
    providers: [
        {
            provide: MAT_MOMENT_DATE_ADAPTER_OPTIONS,
            useValue: {
                strict: true,
                useUtc: true
            }
        }
    ],
    exports: [RouterModule]
})
export class ItemsModule {
}
