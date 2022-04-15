<template>
    <article class="card" v-if="recipe">

        <img :src="getImageURL"/>

        <h2>{{recipe.title.rendered}}</h2>

        <!-- IMPORTANT VUEJS : afficher du html //-->
        <div class="card__content" v-html="recipe.content.rendered">
            <!-- IMPORTANT VUEJS avec la syntaxe mustache, le contenu est affiché comme si c'était du texte
            {{recipe.content.rendered}}
            //-->

        </div>
    </article>
</template>

<script>
import recipeService from '../services/recipeService';
export default {
    name: 'Recipe',
    async created() {
        this.recipeId = this.$route.params.id;
        this.recipe = await recipeService.getRecipeById(this.recipeId);
    },
    data() {
        return {
            recipeId: null,
            recipe: null,
        }
    },
    computed: {
        getImageURL() {

            // Vérification : la recette a-t-elle une image
            if(this.recipe && this.recipe._embedded['wp:featuredmedia'] && this.recipe._embedded['wp:featuredmedia'][0].media_details.sizes.large) {
                return this.recipe._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
            }
            else {
                return 'https://picsum.photos/seed/picsum/400/300';
            }
        }
    }
}
</script>

<style lang="scss">
form {
    margin: auto; 
    max-width: 30%;
}
</style>