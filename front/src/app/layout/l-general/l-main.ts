import {Component, OnDestroy, AfterViewInit} from '@angular/core'
import {Router, NavigationEnd} from '@angular/router'
import {NavInterface} from './nav.interface'
import {PageInfoService} from '../../handlers/page-info/page-info.service'
import {PageInfoInterface} from '../../handlers/page-info/page-info.interface'
import {Subscription} from 'rxjs'

@Component({
  templateUrl: './l-main.html',
  styles: [`
    mat-sidenav-container,
    mat-drawer-container {
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
    }

    .content-wrapper {
      display: flex;
      justify-content: center;
    }

    .content {
      max-width: 80em;
      width: 80em;
    }
  `]
})
export class LMainComponent implements AfterViewInit, OnDestroy {
  pageInfo: PageInfoInterface = {pageTitle: 'Главная'}
  pageData: PageInfoInterface

  sub: Subscription = new Subscription()

  // Menu
  menu: NavInterface[] = [
    {
      title: 'Сайт',
      icon: 'web',
      url: '/site'
    }
  ]

  constructor(
    public router: Router,
    public page: PageInfoService
  ) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      // check if home page, need to update page information (set page title)
      this.sub.add(this.router.events.subscribe(e => {
        if (e instanceof NavigationEnd) this.page.updateData(this.pageInfo)
      }))
      this.sub.add(this.page.data.subscribe(r => this.pageData = r))
    }, 0)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  logout(): void {
    // if (this.auth.logout()) this.router.navigate(['/login'])
    // поправить под новый сервис
  }
}
