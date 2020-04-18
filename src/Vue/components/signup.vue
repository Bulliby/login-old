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
            <v-text-field v-model="login" label="Login" @input="$v.login.$reset()" required :error-messages="loginErrors" />
            <v-text-field v-model="email" label="Email" @input="$v.email.$reset()" required :error-messages="emailErrors" />
            <v-text-field v-model="password" label="Password" type="password" @input="$v.password.$reset()" required :error-messages="passwordErrors"/>
            <v-text-field v-model="password2" label="Password" type="password" @input="$v.password2.$reset()" required :error-messages="password2Errors" />
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
import { required, minLength, between, email } from 'vuelidate/lib/validators'

const checkRegEx = (password) => /(?=(?:.*[^A-Za-z0-9]){2,})(?=(?:.*[A-Z])+)(?=(?:.*[0-9])+).*$/.test(password)

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
            email: '',
            password: '',
            password2: '',
        }
    },
    methods: {
        submit: function() {
            this.$v.$touch();
        },
        connect:function () {
            this.$refs['ruleForm'].validate()
            .then(() => this.ApiRequester.initCsrf())
            .then(() => this.ApiRequester.register({
                'email' : this.ruleForm.email, 
                'login' : this.ruleForm.login, 
                'password' : this.ruleForm.password,
                'passwordValidate' : this.ruleForm.passwordValidate
            }))
            .then((response) => {
                if (response.status === 200) {
                    this.alert = {
                        type: this.$getConst('Alert', 'SUCCESS'),
                        msg: "Votre compte a bien ete  créé"
                    }
                } else {
                    throw new Error("Something bad happened");
                } 
            })
            .catch((error) => {
                console.log(error.response);
            });
        },
    },
    created: function () {
    },
    mounted: function () {
        this.ApiRequester = new ApiRequester('http://auth-belotte');
    },
    computed: {
        loginErrors () {
            const errors = []
            if (!this.$v.login.$dirty) return errors
            !this.$v.login.required && errors.push('This field is required')
            !this.$v.login.minLength && errors.push('You need more than three characters')
            !this.$v.login.isUniqueLogin && errors.push('Your login already exists')
            return errors
        },
        emailErrors () {
            const errors = []
            if (!this.$v.email.$dirty) return errors
            !this.$v.email.required && errors.push('This field is required')
            !this.$v.email.email && errors.push('The email is not valid')
            !this.$v.email.isUniqueEmail && errors.push('Your email already exists')
            return errors
        },
        passwordErrors () {
            const errors = []
            if (!this.$v.password.$dirty) return errors
            !this.$v.password.required && errors.push('This field is required')
            !this.$v.password.checkRegEx && errors.push('Your password is not strong')
            if (!this.$v.password.checkRegEx) {
                this.alert = { type: this.$getConst('Alert', 'ERROR'), msg: "The password require at last two special characters, one uppercase letter and one digit" }
            }
            this.password2 != this.password && errors.push('The passwords doesn\'t match')
            return errors
        },
        password2Errors () {
            const errors = []
            if (!this.$v.password2.$dirty) return errors
            !this.$v.password2.required && errors.push('This field is required')
            !this.$v.password2.checkRegEx && errors.push('Your password is not strong')
            this.password2 != this.password && errors.push('The passwords doesn\'t match')
            return errors
        },
    },
    validations: {
        login: {
            required,   
            minLength: minLength(3),
            isUniqueLogin(login) {
                return this.ApiRequester.initCsrf()
                .then(() => this.ApiRequester.checkLogin({
                    'login' : login
                })).then(() => {
                    return true;
                }).catch((errors) => {
                    if (errors.response.status === 403 ) {
                        return false
                    }
                });
            },
        },
        email: {
            required,
            email,
            isUniqueEmail(email) {
                return this.ApiRequester.checkEmail({
                    'email' : email
                })
                .then(() => {
                    return true;
                })
                .catch((errors) => {
                    if (errors.response.status === 403 ) {
                        return false
                    }
                });
            },
        },
        password: {
            required,
            checkRegEx,
        },
        password2: {
            required,
            checkRegEx,
        }
    }
}
</script>

