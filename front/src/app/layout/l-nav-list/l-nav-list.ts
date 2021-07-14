import {Component, Input} from '@angular/core'

@Component({
  templateUrl: './l-nav-list.html',
  selector: 'app-l-nav-list'
})
export class LNavListComponent {
  /* data */
  @Input() items: object[] = []
  @Input() dates: {start: string, end: string}
  /* options */
  @Input() showCount = false
}
