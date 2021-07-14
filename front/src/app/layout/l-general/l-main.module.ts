import {NgModule} from '@angular/core'
import {CommonModule} from '@angular/common'
import {RouterModule, Routes} from '@angular/router'
import {MatSidenavModule} from '@angular/material/sidenav'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon'
import {MatButtonModule} from '@angular/material/button'
import {LMainComponent} from './l-main'
import {MatListModule} from '@angular/material/list'
import {MatProgressBarModule} from '@angular/material/progress-bar'
import {MatDividerModule} from '@angular/material/divider'

const routes: Routes = [
  {
    path: '',
    component: LMainComponent,
    children: [
      {
        path: 'site',
        loadChildren: () => import('../../pages/site/_p-start/p-site.module')
          .then(mod => mod.PSiteModule)
      }
    ]
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatSidenavModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatProgressBarModule,
    MatDividerModule
  ],
  declarations: [LMainComponent],
  exports: [RouterModule]
})
export class LMainModule {
}
