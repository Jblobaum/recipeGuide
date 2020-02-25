import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { RootState } from '../store';
import { DrinkByIdService } from '../services/drink-by-id.service';
import {  ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-breakdown',
  templateUrl: './breakdown.component.html',
  styleUrls: ['./breakdown.component.scss']
})
export class BreakdownComponent implements OnInit {
  drink: Object;

  constructor(
    private drinkByIDService: DrinkByIdService,
    private actr: ActivatedRoute
  ) { }
  



  ngOnInit(): void {

      this.drinkByIDService.drinksById(this.actr.snapshot.params.id).subscribe(results => this.drink = results['drinks'][0]);
    
  };

}


