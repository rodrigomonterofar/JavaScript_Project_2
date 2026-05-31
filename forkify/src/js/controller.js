import * as model from './model.js';
import recipeView from './views/RecipeView.js';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id || id === 'undefined' || id === 'null') return;
    recipeView.renderSpinner();

    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);

  } catch (err) {
    recipeView.renderError();
  }
};
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
