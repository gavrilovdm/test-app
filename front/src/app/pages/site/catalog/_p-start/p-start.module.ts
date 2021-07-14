import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {PStartComponent} from './p-start'
import {LNavListModule} from '../../../../layout/l-nav-list/l-nav-list.module'

const routes: Routes = [
  {
    path: '',
    component: PStartComponent
  },
  {
    path: 'categories',
    loadChildren: () => import('../categories/items.module')
      .then(mod => mod.ItemsModule)
  },
  {
    path: 'products',
    loadChildren: () => import('../products/items.module')
      .then(mod => mod.ItemsModule)
  },
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    LNavListModule
  ],
  declarations: [PStartComponent],
  exports: [RouterModule]
})
export class PStartModule {
}
