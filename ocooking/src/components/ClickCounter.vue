<template>

    <!-- IMPORTANT Pour afficher la valeur d'une "propriété" d'un composant, il faut utiliser la syntaxe {{NOM_DE_LA_PROPRIETE}}
    Cette syntaxe s'appelle "syntaxe mustache"
    //-->
    <!--
    <button @click="clickCount++">{{clickCount}}</button>
    //-->


    <!-- A chaque fois qu'un click sera détecté, nous appelerons la méthode countAClick

    Equivalent à :
    addEventListener('click', clickCount)
    //-->

    <button
        @click="countAClick"
        :class="parity"
    >
        {{label}} : {{clickCount}}
    </button>

</template>


<script>

export default ({
  watch: {
  },

  // IMPORTANT VUEJS les data
  // Les "data" en vuejs correspondent au propriété protected de la poo classique
  // "data" DOIT être une fonction retournant les propriétés protected de notre componsant

    data() {

        return {
            // par défaut la propriété protected vaut 0
            clickCount: 0,
            parity: 'even'
        };
    },

    // les props sont des "propriétés publiques", leur valeur sont (généralement) définie au moment de l'appel du composant
    props: {
        label: String
    },

    methods: {
        // Méthode se déclanchant au click sur le bouton
        countAClick: function(event) {
            event.preventDefault();
            console.log('Un click a été détecté');

            // incrémentation de la propriété protected clickCount;
            this.clickCount++;

            // this.clickCount est pair
            if(this.clickCount % 2 == 0) {
                this.parity = 'even';
            }
            else {
                // this.clickCount est imppair
                this.parity = 'odd';
            }

        }
    }
});

</script>


<!--
une balise style ayant l'attribut "scoped" ne s'applique qu'au composant
//-->

<style scoped lang="scss">

button {
    transition: all 1s;
    background-color: #f0f;

    &.odd {
        background-color: #f00;
        transform: rotateX(360deg);
    }

    &.even {
        background-color: #0f0;

    }
}




</style>