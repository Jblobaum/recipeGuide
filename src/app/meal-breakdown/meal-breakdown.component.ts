import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeByIdService } from '../services/recipe-by-id.service';

@Component({
  selector: 'app-meal-breakdown',
  templateUrl: './meal-breakdown.component.html',
  styleUrls: ['./meal-breakdown.component.scss']
})
export class MealBreakdownComponent implements OnInit {
  meal: Object = {};
  ingredients: Array<Object>;

  constructor(
    private recipeById: RecipeByIdService,
    private actr: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.recipeById.recipeById(this.actr.snapshot.params.id).subscribe(results => {
      this.meal = results['meals'][0]
      console.log(this.meal);
      this.ingredients = []
      let measurements = []
    
      Object.keys(results['meals'][0]).map(item => {
        if(item.match("strIngredient") && this.meal[item] != "" && this.meal[item] != null){
         measurements =  item.split("strIngredient")
          let key = `strMeasure${measurements[1]}`
          
       this.ingredients.push({ingredient: this.meal[item], measurement: this.meal[key]})
          
          
      }
       
       
      })
    });
  }
    

}
