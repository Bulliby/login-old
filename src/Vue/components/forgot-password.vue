<template>
    <pageContainer>
        <template v-slot:alert>
            <alert :alert="alert"/>
        </template>
        <template v-slot:title>
            <span class="title-slot">Belote en Ligne (Password forgot)</span>
        </template>
        <template v-slot:form>
            <v-form>
                <v-text-field v-model="email" label="Email" @input="emailError = ''" required :error-messages="emailError" />
                <v-btn @click="submit">Submit</v-btn>
            </v-form>
        </template>
    </pageContainer>
</template>

<script>
import pageContainer from 'G/page-container.vue'
import ApiRequester from '../api/ApiRequester'
import laravelValidationMixin from 'G/laravel-validation.js'
import alert from 'G/alert.vue'

export default {
    name: 'forgot-password',
    mixins: [laravelValidationMixin],
    components: {
        pageContainer,
        alert,
    },
    data() {
        return {
            ApiRequester: null,
            alert: null,
            emailError: '',
            email: '',
        }
    },
    methods: {
        submit: function() {
            this.$apiRequester.forgotPassword({
                'email' : this.email, 
            })
            .then((response) => {
                if (response.status === 200) {
                    this.alert = {
                        type: this.$getConst('Alert', 'SUCCESS'),
                        msg: "Votre demande a bien ete prise en compte"
                    }
                } else {
                    throw new Error("Something bad happened");
                } 
            })
            .catch((errors) => this.laravelErros(errors));
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
    }
}
</script>

<style scope></style>
