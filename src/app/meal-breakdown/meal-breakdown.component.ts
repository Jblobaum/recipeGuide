import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeByIdService } from '../services/recipe-by-id.service';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'app-meal-breakdown',
  templateUrl: './meal-breakdown.component.html',
  styleUrls: ['./meal-breakdown.component.scss']
})
export class MealBreakdownComponent implements OnInit {
  meal: Object = {};
  ingredients: Array<Object>;
  youtube: Array<string>;
  yt: string;


  constructor(
    private recipeById: RecipeByIdService,
    private actr: ActivatedRoute,
    private sanitizer: DomSanitizer
  ) { }

  ngOnInit(): void {
    this.recipeById.recipeById(this.actr.snapshot.params.id).subscribe(results => {
      this.meal = results['meals'][0]
      console.log(this.meal);
      this.ingredients = []
      let measurements = []
      this.youtube = this.meal['strYoutube'].split('=')[1];
      this.yt = `<iframe width="560" height="315" src='https://www.youtube.com/embed/${this.youtube}' 
  frameborder="0" allow="accelerometer; autoplay; encrypted-media; 
  gyroscope; picture-in-picture" allowfullscreen></iframe>`



      Object.keys(results['meals'][0]).map(item => {
        if (item.match("strIngredient") && this.meal[item] != "" && this.meal[item] != null) {
          measurements = item.split("strIngredient")
          let key = `strMeasure${measurements[1]}`

          this.ingredients.push({ ingredient: this.meal[item], measurement: this.meal[key] })


        };
      })
    })

  }

}
