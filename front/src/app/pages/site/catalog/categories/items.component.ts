import {AfterViewInit, Component, OnDestroy} from '@angular/core'
import {Subscription} from 'rxjs'
import {CatalogService} from '../catalog.service'
import {PageInfoInterface} from '../../../../handlers/page-info/page-info.interface'
import {PageInfoService} from '../../../../handlers/page-info/page-info.service'
import {MatSnackBar} from '@angular/material/snack-bar'
import {MatDialog} from '@angular/material/dialog'
import {AgreeDialogComponent} from '../../../../elements/agree-dialog/agree-dialog.component'
import {ItemComponent} from './item.component'
import {CategoryInterface} from '../category.interface'

@Component({
  template: `
    <mat-action-list *ngFor="let item of items">
      <mat-list-item (click)="open(item)">
        <div>{{item.title ? item.title : 'ID: ' + item.id}}</div>
        <button mat-icon-button (click)="delete(item.id, $event)">
          <mat-icon>close</mat-icon>
        </button>
      </mat-list-item>
    </mat-action-list>
  `,
  styles: [`
    ::ng-deep .mat-list-item-content {
      justify-content: space-between;
    }
  `],
  providers: [CatalogService]
})
export class ItemsComponent implements AfterViewInit, OnDestroy {
  pageInfo: PageInfoInterface = {
    backUrl: '/site/catalog',
    pageTitle: 'Категории',
    actionBtns: [
      {
        icon: 'add',
        fnName: 'add'
      }
    ]
  }
  items: CategoryInterface[] = []
  sub: Subscription = new Subscription()

  constructor(
    private data: CatalogService,
    private page: PageInfoService,
    private message: MatSnackBar,
    private dialog: MatDialog
  ) {
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.page.updateData(this.pageInfo)
      this.sub.add(
        this.page.btnsData.subscribe(r => {
          if (r === 'add') this.add()
        })
      )
      this.load()
    }, 0)
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe()
  }

  load(): void {
    this.page.startLoading()
    this.data
      .getCategories()
      .subscribe(
        r => {
          if (r?.length > 0) {
            this.page.noDataLoadedOff()
            this.items = r
            //     .sort(
            //   (a, b) =>
            //     a.title.localeCompare(b.title)
            // )
          } else this.page.noDataLoaded()
        },
        () => {
          this.page.endLoading()
          this.page.noDataLoaded()
        },
        () => this.page.endLoading()
      )
  }

  add(): void {
    this.dialog
      .open(AgreeDialogComponent, {data: {title: 'Создать категорию?'}})
      .afterClosed()
      .subscribe(r => {
        if (!r) return
        this.data
          .addCategories()
          .subscribe(r => {
            if (r) this.load()
          })
      })
  }

  open(item: CategoryInterface): void {
    this.dialog
      .open(ItemComponent, {data: item})
      .afterClosed()
      .subscribe((r: CategoryInterface) => {
        if (!r) return
        /*
        * update data in the view
        * */
        const index = this.items.findIndex(i => i.id === item.id)
        this.items[index] = r
        console.log(r)

        /*
        * save data
        * */
        this.sub.add(
          this.data
            .updateCategories(r)
            .subscribe(r => this.message.open('Сохранено', '', {duration: 1000}))
        )
      })
  }

  delete(id: number, event: Event): void {
    event.stopImmediatePropagation()
    this.dialog
      .open(AgreeDialogComponent, {data: {title: 'Удалить категорию?'}})
      .afterClosed()
      .subscribe(r => {
        if (!r) { return }
        this.sub.add(
          this.data
            .deleteCategories(id)
            .subscribe(() => {
              /*
              * Delete item from array, update view without reloading data
              * */
              const index = this.items.findIndex(i => i.id === id)
              this.items.splice(index, 1)
              /*
              * Show notification message
              * */
              this.message.open('Удалено', '', {duration: 1000})
              /*
              * Show no data message if there's no data in the array
              * */
              if (this.items.length < 1) { this.page.noDataLoaded() }
            })
        )
      })
  }
}
