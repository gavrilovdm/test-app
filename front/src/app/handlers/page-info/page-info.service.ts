import {Injectable} from '@angular/core'
import {BehaviorSubject} from 'rxjs/internal/BehaviorSubject'
import {PageInfoInterface} from './page-info.interface'
import {Title} from '@angular/platform-browser'
import {Subject} from 'rxjs/internal/Subject'

@Injectable({providedIn: 'root'})
export class PageInfoService {
  // Main page information, it uses ones when page initializes
  private dataSource = new BehaviorSubject<PageInfoInterface>(null)
  data = this.dataSource.asObservable()

  // Button event
  private btnEventSource: Subject<string> = new Subject()
  btnsData = this.btnEventSource.asObservable()

  // State for activating MatProgressBar
  loadingState: boolean

  // State for activating No Data Message
  loadFail: boolean

  constructor(private title: Title) {
  }

  // Page information

  // Update title in browser
  private setPageTitle(title: string) {
    this.title.setTitle(title)
  }

  // Update page data
  updateData(data: PageInfoInterface): void {
    // update data
    this.dataSource.next(data)
    // set page title in browser
    if (data.pageTitle) this.setPageTitle(data.pageTitle)
    // set No Data Load to NULL
    this.noDataLoadedOff()
  }

  // Loading

  // Call to show loading
  startLoading(): void {
    this.loadingState = true
  }

  // Call to hide loading
  endLoading(): void {
    this.loadingState = false
  }

  // Call to show No Data Loaded Message
  noDataLoaded(): void {
    this.loadFail = true
  }

  noDataLoadedOff(): void {
    if (this.loadFail) this.loadFail = false
  }

  // Button events
  // Call button event
  btnEvent(fnName: string): void {
    this.btnEventSource.next(fnName)
  }
}
