<template>
    <section>
        <h1>User Home</h1>

        <router-link :to="'/recipe-create'">
            Ajouter une recette
            </router-link>

    </section>
</template>

<script>
    import userService from "../services/userService.js";

    export default ({
        name: 'UserHome',
        data() {
            return {
                isUserConnected: false,
            }
        },
        async created() {
            console.log('composant UserHome chargé');
            // On va demander a notre back (api wp) si notre token que l'on a stocké dans localstorage est valide ou non 
            const isTokenValid = await userService.isConnected();
            console.log(isTokenValid);

            if(!isTokenValid) {
                console.log('erreur token non valide...');
                this.$router.push('login');
            } else {
                console.log('token valide');
                this.isUserConnected = true;
            }
        },
    });
</script>

<style scoped lang="scss">
</style>