import {Directive, OnChanges, ElementRef, Renderer2, SimpleChanges, HostListener} from '@angular/core'

@Directive({
  selector: '[app-elevation]'
})
export class EElevationDirective implements OnChanges {
  default: number = 2
  raised: number = 8

  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.setElevation()
  }

  ngOnChanges(_changes: SimpleChanges): void {
    this.setElevation()
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.setElevation(this.raised)
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setElevation()
  }

  setElevation(amount: number = this.default): void {
    // remove all elevation classes
    Array
      .from((<HTMLElement>this.el.nativeElement).classList)
      .filter(c => c.startsWith('mat-elevation-z'))
      .forEach((c) => this.renderer.removeClass(this.el.nativeElement, c))
    // add the given elevation class
    this.renderer.addClass(this.el.nativeElement, `mat-elevation-z${amount}`)
  }
}
