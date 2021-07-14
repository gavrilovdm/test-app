import {AfterViewInit, Component} from '@angular/core'
import {PageInfoInterface} from '../../../../handlers/page-info/page-info.interface'
import {PageInfoService} from '../../../../handlers/page-info/page-info.service'

@Component({
  template: `<app-l-nav-list [items]="items"></app-l-nav-list>`
})
export class PStartComponent implements AfterViewInit {
  pageInfo: PageInfoInterface = {
    pageTitle: 'Каталог',
    backUrl: '/site'
  }

  items: any[] = [
    {
      title: 'Категории',
      url: 'categories'
    },
    {
      title: 'Товары',
      url: 'products'
    },
  ]

  constructor(
    private page: PageInfoService
  ) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => this.page.updateData(this.pageInfo))
  }
}
