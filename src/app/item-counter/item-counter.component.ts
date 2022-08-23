import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-item-counter',
  templateUrl: './item-counter.component.html',
  styleUrls: ['./item-counter.component.css']
})
export class ItemCounterComponent implements OnInit {
 //declaro la entrada y la salida
  @Input() qty!: number ; // | string
  @Output() qtyChange = new EventEmitter<number>(); // en number puede ser cualquier tipo de dato 

  constructor() { }

  ngOnInit(): void {
  }

  dec() { this.updateCount(-1); }
  inc() { this.updateCount(+1); }

  updateCount(delta: number) {
    this.qty = this.qty + delta;
    this.qtyChange.emit(this.qty);
  }

}
