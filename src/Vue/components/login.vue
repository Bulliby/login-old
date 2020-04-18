<template>
    <pageContainer>
    <template v-slot:alert>
        <alert :alert="alert"/>
    </template>
    <template v-slot:title>
        Belote en Ligne
    </template>
    <template v-slot:form>
        <!--el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-position="top" size="large">
            <el-form-item label="Login :" prop="email">
                <el-input placeholder="Your email"  v-model="ruleForm.email" name="login"></el-input>
            </el-form-item>
            <el-form-item label="Password :" prop="password">
                <el-input placeholder="Your password" v-model="ruleForm.password" name="password" show-password></el-input>
            </el-form-item>
            <el-form-item>
                <el-button @click="connect">Se connecter</el-button>
            </el-form-item>
        </el-form!-->
    </template>
    </pageContainer>
</template>

<script>
import pageContainer from 'G/page-container.vue'
import ApiRequester from '../api/ApiRequester'
import alert from 'G/alert.vue'

export default {
    name: 'login',
    components: {
        pageContainer,
        alert
    },
    data() {
        return {
            contentSize: 0,
            ApiRequester: null,
            alert: {
                type: this.$getConst('Alert', 'NOTHING'),
                msg: ""
            },
            ruleForm: {
                email: '',
                passord: ''
            },
            rules: {
                email: [
                    { required: true, message: 'Please enter an email', trigger: 'validate' },
                    { type: 'email', message: 'Please enter a valid email', trigger: 'validate' }
                ],
                password: [
                    { required: true, message: 'Please enter a password', trigger: 'validate' },
                ]
            }
        }
    },
    methods: {
        connect: function () {
            this.$refs['ruleForm'].validate()
            .then(() => this.ApiRequester.initCsrf())
            .then(() => this.ApiRequester.login({ 'email' : this.ruleForm.email, 'password' : this.ruleForm.password, }))
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
    mounted: function () {
        this.ApiRequester = new ApiRequester('http://auth-belotte');
    }
}
</script>
<style scoped>

</style>
