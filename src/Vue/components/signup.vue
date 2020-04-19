<template>
    <pageContainer>
        <template v-slot:alert>
            <alert :alert="alert"/>
        </template>
        <template v-slot:title>
            <span class="title-slot">Belote en Ligne (Inscription)</span>
        </template>
        <template v-slot:form>
         <v-form>
            <v-text-field v-model="login" label="Login" @input="loginError = ''" required :error-messages="loginError" />
            <v-text-field v-model="email" label="Email" @input="emailError = ''" required :error-messages="emailError" />
            <v-text-field v-model="password" label="Password" @input="passwordError = ''" type="password" required :error-messages="passwordError"/>
            <v-text-field v-model="password_confirmation" @input="password_confirmationError = ''" label="Password" type="password" required :error-messages="password_confirmationError" />
            <v-btn @click="submit">Submit</v-btn>
        </v-form>
        </template>
    </pageContainer>
</template>

<script>
import pageContainer from 'G/page-container.vue'
import ApiRequester from '../api/ApiRequester'
import alert from 'G/alert.vue'

export default {
    name: 'signup',
    components: {
        pageContainer,
        alert
    },
    data() {
        return {
            ApiRequester: null,
            alert: null,
            login: '',
            loginError: '',
            email: '',
            emailError: '',
            password: '',
            passwordError: '',
            password_confirmation: '',
            password_confirmationError: '',
        }
    },
    methods: {
        submit: function() {
            this.ApiRequester.register({
                'email' : this.email, 
                'login' : this.login, 
                'password' : this.password,
                'password_confirmation' : this.password_confirmation
            })
            .then((response) => {
                if (response.status === 200) {
                    this.alert = {
                        type: this.$getConst('Alert', 'SUCCESS'),
                        msg: "Votre compte a bien ete créé"
                    }
                } else {
                    throw new Error("Something bad happened");
                } 
            })
            .catch((errors) => {
                if (errors.response.status === 422) {
                    errors = errors.response.data.errors;
                    for (let error of Object.keys(errors)) {
                        this[error+'Error'] = errors[error][0]
                    } 
                } else {
                    throw new Error("Something bad happened");
                } 
            });
        },
    },
    created: function () {
        this.alert = {
            type: this.$getConst('Alert', 'NOTHING'),
            msg: ""
        }
    },
    mounted: function () {
        this.ApiRequester = new ApiRequester('http://auth-belotte');
    },
    computed: {
    },
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');

span.title-slot {
    font-family: 'Noto Sans TC', sans-serif;
    text-shadow: 1px 1px 2px grey;
    font-size: 45px;
}

.v-form {
    display: flex;
    flex-direction: column;
}

.v-btn {
    margin: 30px;
    width: 200px;
    align-self: center;
}

.v-text-field {
    width: 80%;
    align-self: center;
}
</style>

