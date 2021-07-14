import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {PSiteComponent} from './p-site'
import {MatCardModule} from '@angular/material/card'
import {EElevationDirectiveModule} from '../../../elements/elevation/elevation.module'
import {LNavListModule} from '../../../layout/l-nav-list/l-nav-list.module'

const routes: Routes = [
  {
    path: '',
    component: PSiteComponent
  },
  {
    path: 'catalog',
    loadChildren: () => import('../catalog/_p-start/p-start.module')
      .then(mod => mod.PStartModule)
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatCardModule,
    EElevationDirectiveModule,
    LNavListModule
  ],
  declarations: [PSiteComponent],
  exports: [RouterModule]
})
export class PSiteModule {
}
