import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meal-breakdown',
  templateUrl: './meal-breakdown.component.html',
  styleUrls: ['./meal-breakdown.component.scss']
})
export class MealBreakdownComponent implements OnInit {
  drink: Object;
  ingredients: Array<Object>;

  constructor(
    private drinkByIDService: DrinkByIdService,
    private actr: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.drinkByIDService.drinksById(this.actr.snapshot.params.id).subscribe(results => {
      this.drink = results['drinks'][0]
      this.ingredients = []
      let measurements = []
    
      Object.keys(results['drinks'][0]).map(item => {
        if(item.match("strIngredient") && this.drink[item] != null){
         measurements =  item.split("strIngredient")
          console.log(measurements);
          let key = `strMeasure${measurements[1]}`
          console.log(this.drink[key]);
          
       this.ingredients.push({ingredient: this.drink[item], measurement: this.drink[key]})

      }
       
       
      })
      
      console.log(this.ingredients);
      
    });
  }
    


