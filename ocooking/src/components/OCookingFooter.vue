<template>
    <footer>
        <nav>
            <router-link to="/">Liste de recettes</router-link> |
            <span v-if="isUserConnected == false">
                <router-link to="/login">Connexion</router-link> |
                <router-link to="#">Inscription</router-link> |

            </span>

            <a v-if="isUserConnected != false" @click="disconnected()">Deconnexion |</a>
            <router-link to="/user-home">Mon compte</router-link> |
        </nav>
    </footer>
</template>

<script>
import userService from "../services/userService";
import storage from "../plugins/storage"


export default({
    name: 'OCookingFooter',
    data() {
        return {
            userData: false,
            isUserConnected: false,
        }
    },
     methods: {
            disconnected: function() {
                this.userData = storage.unset('userData');
                console.log(this.userData);
                if(this.userData) {
                    console.log('Déconnexion réussie');
                    this.userData = false;
                } else {
                    console.log('Erreur survenus lors de la déconnexion');
                }
            }
     },

    async created() {
        const isTokenValid = await userService.isConnected();
        if(!isTokenValid) {
            this.isUserConnected = false;
        } else {
            this.isUserConnected = true;
        }
    }


});

</script>