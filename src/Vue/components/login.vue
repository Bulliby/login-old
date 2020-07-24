<template>
    <pageContainer>
        <template v-slot:alert>
            <alert :alert="alert"/>
        </template>
        <template v-slot:title>
            <span class="title-slot">Belote en Ligne</span>
        </template>
        <template v-slot:form>
            <v-form>
                <v-text-field v-model="email" label="Email" @input="emailError = ''" required :error-messages="emailError" />
                <v-text-field v-model="password" label="Password" @input="passwordError = ''" type="password" required :error-messages="passwordError"/>
                <v-btn @click="submit">Submit</v-btn>
            </v-form>
        </template>
    </pageContainer>
</template>

<script>
import pageContainer from 'G/page-container.vue'
import alert from 'G/alert.vue'

export default {
    name: 'login',
    components: {
        pageContainer,
        alert
    },
    data() {
        return {
            alert: {
                type: this.$getConst('Alert', 'NOTHING'),
                msg: ""
            },
            email: "",
            password: "",
            emailError: "",
            passwordError: "",
        }
    },
    methods: {
        submit: function () {
            this.$apiRequester.login({ 
                'email' : this.email, 
                'password' : this.password 
            })
            .then((response) => {
                if (response.status == 200) {
                    this.alert = {
                        type: this.$getConst('Alert', 'SUCCESS'),
                        msg: "Vous etes auhtentifie"
                    }
                }
            })
            .catch((error) => {
                if (error.response.status == 403) {
                    this.alert = {
                        type: this.$getConst('Alert', 'ERROR'),
                        msg: "Mauvais mot de passe ou login"
                    }
                } else {
                    throw new Error("Something bad happened");
                }
            });
        },
    },
}
</script>
<style scoped>

</style>
