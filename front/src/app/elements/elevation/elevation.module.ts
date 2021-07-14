import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {EElevationDirective} from './elevation.directive'

@NgModule({
  imports: [CommonModule],
  declarations: [EElevationDirective],
  exports: [EElevationDirective]
})
export class EElevationDirectiveModule {
}
