import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input() appHighlight = '';
  @Input() defaultColor = '';

  constructor(private element: ElementRef) {
    // this.element.nativeElement.style.backgroundColor = 'yellow';
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.appHighlight || this.defaultColor || 'red');
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight('');
  }

  @HostListener('click') onClick() {
    this.highlight('red');
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }

}
