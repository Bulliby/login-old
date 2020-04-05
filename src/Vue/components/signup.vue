<template>
	<pageContainer>
        <template v-slot:alert>
            <alert :alert="alert"/>
        </template>
        <template v-slot:title>
            Belote en Ligne (Inscription)
        </template>
        <template v-slot:form>
            <el-form label-position="top" size="large">
                <el-form-item label="Login :">
                    <el-input placeholder="Votre login" name="login"></el-input>
                </el-form-item>
                <el-form-item label="Email :">
                    <el-input placeholder="Votre email" name="email"></el-input>
                </el-form-item>
                <el-form-item label="Password :">
                    <el-input placeholder="Votre mot de passe" name="password"></el-input>
                </el-form-item>
                <el-form-item label="De nouveau votre mot de passe" name="password2">
                    <el-input placeholder="Votre mot de passe" name="password2"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button @click="connect">Soumettre</el-button>
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
        return {
			ApiRequester: null,
			alert: {
				type: this.$getConst('Alert', 'NOTHING'),
				msg: ""
			},
        }
    },
    methods: {
		connect: function () {
            console.log('submit');
        }
    },
    created: function () {
    }
}
</script>

<style scoped>

</style>
