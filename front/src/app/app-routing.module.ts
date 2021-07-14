import {NgModule} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {LoginGuard} from './handlers/auth/login.guard'
import {AuthGuard} from './handlers/auth/auth.guard'

const routes: Routes = [
  {
    path: '',
    canActivate: [AuthGuard],
    loadChildren: () => import('./layout/l-general/l-main.module')
      .then(mod => mod.LMainModule)
  },
  {
    path: 'login',
    canActivate: [LoginGuard],
    loadChildren: () => import('./pages/user/p-login/p-login.module')
      .then(mod => mod.PLoginMoule)
  },
  {path: '**', redirectTo: '/'}
]

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
