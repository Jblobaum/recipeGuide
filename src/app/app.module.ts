import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LogInComponent } from './log-in/log-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { UserComponent } from './user/user.component';
import { SearchComponent } from './search/search.component';
import { MaterialModule } from './materialModule';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { CocktailComponent } from './cocktail/cocktail.component';
import { MealBreakdownComponent } from './meal-breakdown/meal-breakdown.component';
import { BreakdownComponent } from './breakdown/breakdown.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';
import { IngredientBreakdownComponent } from './ingredient-breakdown/ingredient-breakdown.component';
import { DrinkIngredientBreakdownComponent } from './drink-ingredient-breakdown/drink-ingredient-breakdown.component';
import { SafePipe } from './pipes/safe.pipe';
import { HomeComponent } from './home/home.component';





@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    UserComponent,
    SearchComponent,
    CocktailComponent,
    MealBreakdownComponent,
    BreakdownComponent,
    IngredientBreakdownComponent,
    DrinkIngredientBreakdownComponent,
    SafePipe,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers)
 
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
