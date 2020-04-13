<template>
    <pageContainer>
    <template v-slot:alert>
        <alert :alert="alert"/>
    </template>
    <template v-slot:title>
        Belote en Ligne (Inscription)
    </template>
    <template v-slot:form>
        <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" size="large">
            <el-form-item label="Login :" prop="login">
                <el-input placeholder="Votre login" v-model="ruleForm.login" name="login"></el-input>
            </el-form-item>
            <el-form-item label="Email :" prop="email">
                <el-input placeholder="Votre email" v-model="ruleForm.email" name="email"></el-input>
            </el-form-item>
            <el-form-item label="Password :" prop="password">
                <el-input placeholder="Votre mot de passe" v-model="ruleForm.password" name="password" show-password></el-input>
            </el-form-item>
            <el-form-item label="De nouveau votre mot de passe" prop="passwordValidate">
                <el-input placeholder="Votre mot de passe" v-model="ruleForm.passwordValidate" name="passwordValidate" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="connect" id="btn-style">Soumettre</el-button>
            </el-form-item>
        </el-form>
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
        let checkLogin = this.checkLogin;
        let checkEmail = this.checkEmail;
        return {
            ApiRequester: null,
            alert: {
                type: this.$getConst('Alert', 'NOTHING'),
                msg: ""
            },
            ruleForm: {
                email: '',
                login: '',
                password: '',
                passwordValidate: ''
            },
            rules: {
                login: [
                    { required: true, message: 'Please enter a login', trigger: 'validate' },
                    { min: 5, max: 15, message: 'Choose a login between 5 and 15 characters', trigger: 'validate' },
                    { validator: checkLogin, message: "The login already exists", trigger: 'validate' },
                ],
                email: [
                    { required: true, message: 'Please enter an email', trigger: 'validate' },
                    { type: 'email', message: 'Please enter a valid email', trigger: 'validate' },
                    { validator: checkEmail, message: 'The email already exist', trigger: 'validate' },
                ],
                password: [
                    { pattern: '(?=(?:.*[^A-Za-z0-9]){2,})(?=(?:.*[A-Z])+)(?=(?:.*[0-9])+).*$', message: 'Need two speacial chars one digit and an upercase letter', trigger: 'validate' },
                    { min: 8, message: 'Password must be at least 8 characters', trigger: 'validate' },
                    { required: true, message: 'Please enter a password', trigger: 'validate' },
                ],
                passwordValidate: [
                    { pattern: '(?=(?:.*[^A-Za-z0-9]){2,})(?=(?:.*[A-Z])+)(?=(?:.*[0-9])+).*$', message: 'Need two speacial chars one digit and an upercase letter', trigger: 'validate' },
                    { min: 8, message: 'Password must be at least 8 characters', trigger: 'validate' },
                    { required: true, message: 'Please valid your password', trigger: 'validate' },
                ],
            }
        }
    },
    methods: {
        connect: function () {
            this.$refs['ruleForm'].validate()
            .then(this.ApiRequester.register({
                'email' : this.ruleForm.email, 
                'login' : this.ruleForm.login, 
                'password' : this.ruleForm.password,
                'passwordValidate' : this.ruleForm.passwordValidate
            }));
        },
        checkLogin: function(rule, value, callback) {
            this.ApiRequester.checkLogin({
                'login' : this.ruleForm.login
            }).catch((error) => {
                if (error.response.status === 403 ) {
                    return callback(new Error(rule.message));
                }
            });
        },
        checkEmail: function(rule, value, callback) {
            this.ApiRequester.checkEmail({
                'email' : this.ruleForm.email
            }).catch((error) => {
                if (error.response.status === 403 ) {
                    return callback(new Error(rule.message));
                }
            });
        },
    },
    created: function () {
    },
    mounted: function () {
        this.ApiRequester = new ApiRequester('http://auth-belotte');
    }
}
</script>

<style scoped>
#btn-style {
    margin-top: 20px;
}
</style>
