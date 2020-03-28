<template>
    <div class="container">
        <!--div class="alert">
            <el-alert v-if="alert === error" title="Vous etes authenitfie" type="success" center>
            </el-alert>
            <el-alert v-if="alert === success" title="Email ou mot de pass incorect" type="error" center>
            </el-alert>
        </div-->
        <div class="grid-container" v-on:menu-created-get-size="test()">
            <h1 class="title">
                Belotte en Ligne
            </h1>
            <div class="border-container">
                <el-form>
                    <el-form-item label="Login :">
                        <el-input placeholder="Your email" v-model="email" name="login"></el-input>
                    </el-form-item>
                    <el-form-item label="Password :">
                        <el-input placeholder="Your password" v-model="password" name="password" show-password></el-input>
                    </el-form-item>
                    <el-button @click="connect">Se connecter</el-button>
                </el-form>
            </div>
        </div>
    </div>
</template>

<script>
import ApiRequester from '../api/ApiRequester';

export default {
    name: 'login',
    data() {
        return {
            email: '',
            password: '',
            contentSize: 0,
            ApiRequester: null,
        }
    },
    methods: {
        connect() {
            this.ApiRequester.initCsrf();
            this.ApiRequester.login({
                'email' : this.email,
                'password' : this.password,
            });
        }
    },
    created: function () {
        this.$getConst('Alert', 'NOTHING');
        this.ApiRequester = new ApiRequester('http://auth-belotte');
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');

div.container {
    height: 100%;
}

div.border-container {
    grid-column-start: 2;
    grid-row-start: 2;
    justify-self: stretch;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: 10% auto 10%;
    grid-template-rows: 10% auto 10%;
}

.el-form {
    grid-column-start: 2;
    grid-row-start: 2;
    justify-self: center;
    align-self: center;
}

div.grid-container {
    display: grid;
    grid-template-columns: 35% auto 35%;
    grid-template-rows: 30% auto 30%;
    height: calc(100% - 61px);
}

div.grid-container h1.title {
    font-family: 'Noto Sans TC', sans-serif;
    grid-column-start: 2;
    grid-row-start: 1;
    justify-self: center;
    align-self: end;
    text-shadow: 1px 1px 2px grey;
}

</style>
