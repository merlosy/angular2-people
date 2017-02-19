import { Directive, Input, Renderer, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[cap-badge]'
})
export class BadgeDirective implements OnInit {

  @Input() person: any;

  constructor(private _element: ElementRef, private _renderer: Renderer) {
  }

  ngOnInit() {
    if (this.person.isManager) {
      this._renderer.setElementProperty( this._element.nativeElement, 'innerHtml',
       '<i class="material-icons">supervisor_account</i>' );
    }
  }

}
