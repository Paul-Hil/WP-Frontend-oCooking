<template>

    <article class="card">
        <!--
            IMPORTANT VUEJS :attributeHTML
            :HTML_ATRTIBUTE="ICI_UNE_VARIABLE_JAVASCRIPT"
            VS
            HTML_ATRTIBUTE="ICI DU TEXTE"
        //-->
        <img :src="getImageURL"/>
        <h2>{{recipe.title.rendered}}</h2>

        <!-- IMPORTANT VUEJS : afficher du html //-->
        <div class="card__content" v-html="recipe.excerpt.rendered">
            <!-- IMPORTANT VUEJS avec la syntaxe mustache, le contenu est affiché comme si c'était du texte
            {{recipe.content.rendered}}
            //-->

        </div>

        <div>
            <router-link :to="{
                    name: 'Recipe',
                    params: {
                        id: recipe.id
                    }
            }">
            Lire la suite
            </router-link>
        </div>
    </article>

</template>

<script>

export default({
    name: 'OCookingRecipe',

    data() {
        return {
            imageURL: 'https://picsum.photos/seed/picsum/400/300',
            title: 'Titre de la recette',
            excerpt: 'Résumé de la recette',
            recipeId: null,
        }
    },

    props: {
        // nous disons que la props recipe sera de type "Object"
        recipe: Object,
    },


    computed: {
        getImageURL() {

            // Vérification : la recette a-t-elle une image
            if(this.recipe._embedded['wp:featuredmedia']) {
                return this.recipe._embedded['wp:featuredmedia'][0].media_details.sizes.large.source_url;
            }
            else {
                return 'https://picsum.photos/seed/picsum/400/300';
            }
        },
    }

});
</script>

