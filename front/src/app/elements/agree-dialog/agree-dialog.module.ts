import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {MatDialogModule} from '@angular/material/dialog'
import {AgreeDialogComponent} from './agree-dialog.component'
import {MatButtonModule} from '@angular/material/button'

@NgModule({
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule
  ],
  declarations: [AgreeDialogComponent],
  exports: [AgreeDialogComponent]
})
export class AgreeDialogModule {}
