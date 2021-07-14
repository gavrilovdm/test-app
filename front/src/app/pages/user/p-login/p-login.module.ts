import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {PLoginComponent} from './p-login'
import {ReactiveFormsModule} from '@angular/forms'
import {MatCardModule} from '@angular/material/card'
import {MatButtonModule} from '@angular/material/button'
import {MatFormFieldModule} from '@angular/material/form-field'
import {MatInputModule} from '@angular/material/input'
import {MatIconModule} from '@angular/material/icon'
import {MatSnackBarModule} from '@angular/material/snack-bar'

const routes: Routes = [{path: '', component: PLoginComponent}]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule,
    MatCardModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSnackBarModule
  ],
  declarations: [PLoginComponent],
  exports: [RouterModule]
})
export class PLoginMoule {
}
