import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { RootState } from '../store';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {
user$: Observable<Object>;


  constructor(
    private store: Store<RootState>
  ) {
    this.user$ = store.pipe(select('user'))
   }

  ngOnInit(): void {
    
  }

}
