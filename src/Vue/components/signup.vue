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
            <v-text-field v-model="login" label="Login" required :error-messages="loginError" />
            <v-text-field v-model="email" label="Email" required :error-messages="emailError" />
            <v-text-field v-model="password" label="Password" type="password" required :error-messages="passwordError"/>
            <v-text-field v-model="password_confirmation" label="Password" type="password" required :error-messages="password_confirmationError" />
            <v-btn @click="submit">Submit</v-btn>
        </v-form>
        </template>
    </pageContainer>
</template>
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
            alert: {
                type: this.$getConst('Alert', 'NOTHING'),
                msg: ""
            },
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
                    console.log(errors);
                    for (let error of Object.keys(errors)) {
                        this[error+'Error'] = errors[error][0]
                    } 
                } else {
                    throw new Error("Something bad happened");
                } 
            });
        },
        connect:function () {
        },
    },
    created: function () {
    },
    mounted: function () {
        this.ApiRequester = new ApiRequester('http://auth-belotte');
    },
    computed: {
    },
}
</script>
