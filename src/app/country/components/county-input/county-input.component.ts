import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-county-input',
  templateUrl: './county-input.component.html',
})
export class CountyInputComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDeBounce: EventEmitter<string> = new EventEmitter();
  @Input() placeholder: string = '';

  debouncer: Subject<string> = new Subject();

  constructor() {}
  ngOnInit(): void {
    this.debouncer.pipe(debounceTime(500)).subscribe((value) => {
      // console.log('debouncer:', value);
      this.onDeBounce.emit(value);
    });
  }

  term: string = '';

  search() {
    this.onEnter.emit(this.term);
  }

  keyPressed() {
    this.debouncer.next(this.term);
  }
}
