import {Injectable} from '@angular/core'
import {
  CanActivate,
  CanActivateChild,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router'
import {Observable, of} from 'rxjs'

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate, CanActivateChild {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (localStorage.getItem('auth')) return of(true)

    this.router.navigate(['/login'])

    return of(false)
  }

  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    return this.canActivate(route, state)
  }
}
