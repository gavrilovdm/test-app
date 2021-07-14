import {AfterViewInit, Component} from '@angular/core'
import {PageInfoInterface} from '../../../handlers/page-info/page-info.interface'
import {PageInfoService} from '../../../handlers/page-info/page-info.service'

@Component({
  template: '<app-l-nav-list [items]="items"></app-l-nav-list>'
})
export class PSiteComponent implements AfterViewInit {
  pageInfo: PageInfoInterface = {
    pageTitle: 'Управление сайтом'
  }

  items: any[] = [
    {
      title: 'Каталог',
      url: 'catalog'
    }
  ]

  constructor(
    private page: PageInfoService
  ) {
  }

  ngAfterViewInit() {
    setTimeout(() => this.page.updateData(this.pageInfo), 0)
  }
}
