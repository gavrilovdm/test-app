import {Injectable} from '@angular/core'
import {CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router'
import {Observable, of} from 'rxjs'

@Injectable({providedIn: 'root'})
export class LoginGuard implements CanActivate {
  constructor(private router: Router) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    if (!localStorage.getItem('auth')) return of(true)

    this.router.navigate(['/'])

    return of(false)
  }
}
