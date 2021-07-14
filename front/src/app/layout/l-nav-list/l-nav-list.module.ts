import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule} from '@angular/router'
import {LNavListComponent} from './l-nav-list'
import {EElevationDirectiveModule} from '../../../../../../lemakka/angular/projects/accu-energo/admin/src/app/elements/elevation/elevation.module'
import {MatCardModule} from '@angular/material/card'
import {MatIconModule} from '@angular/material/icon'
import {MatTooltipModule} from '@angular/material/tooltip'
import {MatListModule} from '@angular/material/list'

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    EElevationDirectiveModule,
    MatCardModule,
    MatIconModule,
    MatTooltipModule,
    MatListModule
  ],
  declarations: [LNavListComponent],
  exports: [LNavListComponent]
})
export class LNavListModule {
}
