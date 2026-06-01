import * as model from './model.js';
import recipeView from './views/RecipeView.js';
import searchView from './views/searchViews.js';
import resultsView from './views/ResultView.js';

const controlRecipes = async function () {
  try {
    const id = window.location.hash.slice(1);
    if (!id || id === 'undefined' || id === 'null') return;
    recipeView.renderSpinner();

    await model.loadRecipe(id);
    recipeView.render(model.state.recipe);

  } catch (err) {
    recipeView.renderError(err.message);
  }
};

const controlSearchResults = async function () {
  try {
    const query = searchView.getQuery();
    if (!query) return;

    resultsView.renderSpinner0();

    await model.loadSearchResults(query);
    resultsView.render(model.state.search.results);
  } catch (err) {
    console.log(err);
  }
};

const init = async function () {
  recipeView.addHandlerRender(controlRecipes);
  searchView.addHandlerSearch(controlSearchResults);
};

init();
// https://forkify-api.herokuapp.com/v2

///////////////////////////////////////
