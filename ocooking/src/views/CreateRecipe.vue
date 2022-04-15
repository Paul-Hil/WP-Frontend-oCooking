<template>
  <form @submit="saveRecipe">
    <h1>Ajouter une nouvelle recette</h1>

    <label for="title">Titre:</label>
    <input v-model="title" required />

    <label for="content">Contenus:</label>
    <input type="textarea" v-model="content" id="content" required />

    <label for="excerpt">Extrait: </label>
    <input type="textarea" v-model="excerpt" id="excerpt" required />

    <div v-for="type in types" :key="type.id" class="selectTypes">
      <label>
        <input
          type="radio"
          name="type"
          :value="type.id"
          v-model="selectedType"
        />
        {{ type.name }}
      </label>
    </div>

    <label for="">Choisir les ingrédients:</label>
    <div v-for="ingredient in ingredients" :key="ingredient.id">
      <label>
        <input
          type="checkbox"
          name="type"
          :value="ingredient.id"
          v-model="selectedIngredients"
        />
        {{ ingredient.name }}
      </label>
    </div>

    <button>Envoyer</button>
  </form>
</template>

<script>
import recipeService from "../services/recipeService";
import userService from "../services/userService";

export default {
  name: "OCookingCreateRecipe",

  data() {
    return {
      isUserConnected: false,
      token: "",
      title: "",
      excerpt: "",
      content: "",
      ingredients: [],
      types: [],
      selectedType: null,
      selectedIngredients: [],
      createdFail: false,
    };
  },

  methods: {
    async saveRecipe(evt) {
      evt.preventDefault();

      
      const result = await recipeService.saveRecipe(
            this.title,
            this.selectedType,
            this.excerpt,
            this.content,
            this.selectedIngredients
          );

        if(result) {
            this.createdFail = false;
        } else {
            this.createdFail = true;
        }
    },

    async loadTypes() {
      this.types = await recipeService.loadRecipesTypes();
    },

    async loadIngredients() {
      this.ingredients = await recipeService.loadRecipesIngredients();
    },
  },

  async created() {
    const isTokenValid = await userService.isConnected();
    if (!isTokenValid) {
      this.$router.push("login");
    } else {
      this.isUserConnected = true;
    }

    this.loadTypes();

    this.loadIngredients();
  },
};
</script>

<style lang='scss'>
input {
  margin-bottom: 1rem;
}

label {
  text-align: left;
}

.selectTypes {
  display: flex;
}
</style>