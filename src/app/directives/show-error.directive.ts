import { Directive, ElementRef, HostListener, Input, OnChanges, OnInit, Renderer2, SimpleChanges, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Directive({
  selector: '[showError]'
})
export class ShowErrorDirective implements OnInit{
  @Input() form!: FormGroup;
  @Input() controlName!: string;
  @Input() anchor!: HTMLElement;

  @HostListener("input") inputEvent(){
    let msg = this.getErrorMessage(this.form.get(this.controlName))
    let adf = this.rendered2.createText(msg)
    // this.rendered2.removeChild(this.anchor, adf)
    this.rendered2.appendChild(this.anchor, adf)
  }

  constructor(private element: ElementRef, private rendered2: Renderer2) { }

  ngOnInit(): void {
  }

  getErrorMessage(element:any){
    if(element.hasError("minlength")){
      return "The minlength"
    }
    if(element.hasError("maxlength")) return "The maxlength"
    if(element.hasError("required")) return "The value is required"
    return ""
  }

}
