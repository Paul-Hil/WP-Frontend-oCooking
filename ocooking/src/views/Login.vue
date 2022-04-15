<template>
    <section>
        <form @submit="checkInputs">
            <label>
                Login
                <input name="login" v-model="login">
            </label>
            
            <div class="error" v-if="loginEmpty">Vous devez saisir un identifiant</div>

            <label>
                Mot de passe
                <input name="password" v-model="password" type="password">
            </label>
            
            <div class="error" v-if="passwordEmpty">Vous devez saisir un mot de passe</div>

            <div class="error" v-if="loginFailed">Echec de la connexion</div>


            <button>Se Connecter</button>

        </form>
    </section>
</template>

<script>
    import userService from '../services/userService.js';
    import storage from '../plugins/storage.js';
    export default ({
        name: 'Login',
        data() {
            return {
                login: '',
                password: '',
                loginEmpty: false,
                passwordEmpty: false,
                loginFailed: false,
            }
        },
        methods: {
            async checkInputs(evt){
                evt.preventDefault();
                console.log("CHECKINPUTS");
                
                if(this.login == '') {
                   this.loginEmpty = true;
                }
                if(this.password== '') {
                   this.passwordEmpty = true;
                }
                // Si on a bien un login ET un password
                if(!this.passwordEmpty && !this.loginEmpty){
                    // je vais essayer de me connecter a mon back WP
                    let userData = await userService.login(this.login, this.password);
                    if(userData){
                        storage.set('userData', userData);
                        this.loginFailed = true;
                        this.$router.push('user-home');
                    
                    } else {
                        this.loginFailed = true;
                    }
                    
                }
                
            }
        }
    });
</script>

<style scoped lang="scss">
</style>