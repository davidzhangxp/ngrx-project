import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../ngrx/counter.actions';
import { selectFeatureCount } from '../ngrx/counter.selecter';

@Component({
  selector: 'app-my-counter',
  templateUrl: './my-counter.component.html',
  styleUrls: ['./my-counter.component.css'],
})
export class MyCounterComponent implements OnInit {
  count$!: Observable<number>;
  constructor(private store: Store<{ counter: number }>) {
    // TODO: Connect `this.count$` stream to the current store `count` state
    // this.count$ = store.select('counter');
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }

  ngOnInit(): void {
    this.count$ = this.store.select(selectFeatureCount);
  }
}
