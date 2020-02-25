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
import { BreakdownComponent } from './breakdown/breakdown.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store';



@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    SignUpComponent,
    UserComponent,
    SearchComponent,
    CocktailComponent,
    BreakdownComponent
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
