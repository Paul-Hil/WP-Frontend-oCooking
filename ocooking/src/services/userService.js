// IMPORTANT import du composant axios (pas besoin de spécifier le chemin, axios a été installé avec npm ; la bibliothèque sera chargée directement depuis le dossier node_modules)
import axios from 'axios';

import storage from '../plugins/storage.js';
const userService = {
    baseURI: 'http://localhost/Trinity/SpeWordpress/oCooking/WP-trinity-Backend-oCooking-Paul-Hil/public/wp-json/jwt-auth/v1',

    login: async function(login, password){
        let response = await axios.post(
            userService.baseURI + '/token', {
                username: login,
                password: password
            }
        ).catch(function(){ // si on a une erreur
            console.log('Erreur connexion');
            return false;
        });

        return response.data;

    },

    isConnected: async function(){
        // ici on va envoyer le token que l'on a stocké en localstorage a notre api pour voir si ce dernier est valide ou non !

        // je récupère les donnees dans localStorage
        const userData = storage.get('userData');
        // si on a bien une entrée userData
        if(userData != null){
            // je viens récupérer le token
            const token = userData.token;

            if(token) {
                // SI J'AI BIEN UN TOKEN   
                // je vais vérifier si ce dernier est valide
                const options = {
                    headers: {
                        Authorization: 'Bearer ' + token
                    }
                };
                
                const response = await axios.post(userService.baseURI + '/token/validate', null, options).catch(function(){
                    return false;
                })  
                
                console.log('methode isconnected, reponse : ' + response.data);
                //return response.data;
                return true;
            }
        }
    }
};


export default userService;