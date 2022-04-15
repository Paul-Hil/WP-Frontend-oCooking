// IMPORTANT import du composant axios (pas besoin de spécifier le chemin, axios a été installé avec npm ; la bibliothèque sera chargée directement depuis le dossier node_modules)
import axios from 'axios';
import storage from '../plugins/storage';

// IMPORTANT JS service recette, var nous permettre d'interagir avec l'api
const recipeService = {

    // IMPORTANT configuration de la base URI de l'api
    baseURI: 'http://localhost/Trinity/SpeWordpress/oCooking/WP-trinity-Backend-oCooking-Paul-Hil/public/wp-json/wp/v2',

    // IMPORTANT JS ASYNC : déclaration d'une fonction qui ne se bloquera pas lorsqu'elle doit attendre quelque chose
    async loadRecipes() {
      // IMPORTANT JS Ajax avec Axios
      // await permet de dire à javascript qu'avant de continuer son traitement, il va devoir attendre que la fonction se termine. Préciser le "await" permet d'attendre mais sans bloquer javascript
      const response = await axios.get(recipeService.baseURI + '/recipe?_embed=true');

      // nous retournons la liste des recettes
      return response.data;
  },

  async loadRecipesTypes() {
    const response = await axios.get(recipeService.baseURI + '/recipe-type?_embed=true');
    return response.data;
  },

  async loadRecipesIngredients() {
    const response = await axios.get(recipeService.baseURI + '/ingredient');
    return response.data;
  },
  
  async getRecipeById(recipeId){
    const response = await axios.get(recipeService.baseURI + '/recipe/' + recipeId + '?_embed=true');
    return response.data;
  },

  async getRecipeByType(selectedType) {
    const response = await axios.get(recipeService.baseURI + '/recipe/?_embed=true&recipe-type=' + selectedType);
    return response.data;
  },

  async getRecipeByIngredient(selectedIngredient) {
    const response = await axios.get(recipeService.baseURI + '/recipe/?_embed=true&ingredient=' + selectedIngredient);
    return response.data;
  },

  async getRecipeByTypeAndIngredient(selectedType, selectedIngredient) {
    const response = await axios.get(recipeService.baseURI + '/recipe/?_embed=true&ingredient=' + selectedIngredient + '&recipe-type=' + selectedType);
    return response.data;
  },

  async saveRecipe(titre, type, description, contenu, ingredients){

    const userData = storage.get("userData");
      if (userData != null) {
        const token = userData.token;
        if (token) {
          const options = {
            headers: {
                Authorization: 'Bearer ' + token,
                'Access-Control-Allow-Origin': 'Authorization',
                "Access-Control-Allow-Headers": 'Authorization, X-WP-Nonce, Content-Disposition, Content-MD5, Content-Type'
                
            }
          };

          const response = await axios.post('http://localhost/Trinity/SpeWordpress/oCooking/WP-trinity-Backend-oCooking-Paul-Hil/public/wp-json/ocooking/v1/recipe-save', {
            title: titre,
            type: type,
            excerpt: description,
            content: contenu,
            ingredients: ingredients
          }, options).catch(function(error) {
            console.log(error);
            return false;
          });
          
          return response;
        }
      }
      return false;
  }
};

// IMPORTANT JS pour rendre "recipeService" utilisable (importable) dans d'autres composants, il faut l'exporter
export default recipeService;

