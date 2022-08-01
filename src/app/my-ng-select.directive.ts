import {Directive, OnInit, Self} from '@angular/core';
import {NgSelectComponent} from "@ng-select/ng-select";

@Directive({
  // selector: 'ng-select[appMyNgSelect]'
  selector: 'ng-select'
})
export class MyNgSelectDirective implements OnInit {

  // constructor(@Self() private readonly ele: NgSelectComponent) {
  constructor(private readonly ele: NgSelectComponent) {
  }

  ngOnInit(): void {
    this.ele.placeholder = "請選擇"
    this.ele.changeEvent.subscribe(e => console.log(this.ele))
    console.log(this.ele);
  }

}
