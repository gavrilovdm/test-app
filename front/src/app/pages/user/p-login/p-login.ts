import {Component, OnDestroy} from '@angular/core'
import {FormGroup, FormControl, Validators} from '@angular/forms'
import {Subscription} from 'rxjs'
import {MatSnackBar} from '@angular/material/snack-bar'
import {Router} from '@angular/router'

@Component({
    templateUrl: './p-login.html'
})
export class PLoginComponent implements OnDestroy {
    passwordShowState: boolean

    form: FormGroup = new FormGroup({
        login: new FormControl(null, [Validators.required]),
        password: new FormControl(null, [Validators.required])
    })

    sub: Subscription = new Subscription()

    constructor(private router: Router, private snackBar: MatSnackBar) {
    }

    ngOnDestroy(): void {
        this.sub.unsubscribe()
    }

    submit() {
        if (this.form.invalid) return
        this.form.markAllAsTouched()

        if (this.login(this.form.value)) {
            localStorage.setItem('auth', 'true')
            this.router.navigate(['/'])
        } else {
            this.snackBar.open('Неправильный логин или пароль', '', {duration: 2000})
        }
    }

    login(data: {login: string, password: string}): boolean {
        return data.login === 'admin' && data.password === 'password'
    }
}
