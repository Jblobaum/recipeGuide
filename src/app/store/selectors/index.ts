import { RootState } from '..';

export const getRecipeState = (state: RootState)=> state.recipe.recipes;
export const getUserState = (state: RootState)=> state.user.username;
export const getDrinkState = (state: RootState)=> state.drink.drinks;