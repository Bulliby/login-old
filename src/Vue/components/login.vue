<template>
    <div class="container">
        <alert :alert="alert"/>
        <div class="grid-container">
            <h1 class="title">
                Belote en Ligne
            </h1>
            <div class="border-container">
                <el-form>
                    <el-form-item label="Login :">
                        <el-input placeholder="Your email" v-model="email" name="login"></el-input>
                    </el-form-item>
                    <el-form-item label="Password :">
                        <el-input placeholder="Your password" v-model="password" name="password" show-password></el-input>
                    </el-form-item>
                    <el-form-item>
                        <el-button @click="connect">Se connecter</el-button>
                    </el-form-item>
                </el-form>
            </div>
        </div>
        <credits/>
    </div>
</template>

<script>
import ApiRequester from '../api/ApiRequester'
import credits from '@/credits.vue'
import alert from 'G/alert.vue'

export default {
    name: 'login',
    components: {
        credits,
        alert
    },
    data() {
        return {
            email: '',
            password: '',
            contentSize: 0,
            ApiRequester: null,
            alert: this.$getConst('Alert', 'NOTHING')
        }
    },
    methods: {
        connect: function () {
            this.ApiRequester.initCsrf().then(() => {
                this.ApiRequester.login({
                    'email' : this.email,
                    'password' : this.password,
                }).catch((error) => {
                    if (error.response.status == 403) {
                        this.alert = this.$getConst('Alert', 'ERROR')
                    } else {
                        abort("Something bad happened");
                    }
                }).then((response) => {
                    if (response.status == 200) {
                        this.alert = this.$getConst('Alert', 'SUCCESS')
                    }
                });
            });
        }
    },
    created: function () {
        this.ApiRequester = new ApiRequester('http://auth-belotte');
    }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Noto+Sans+TC');

div.container {
    flex: 1;
    display: flex;
    flex-direction: column;
}

div.grid-container {
    display: grid;
    grid-template-columns: 35% auto 35%;
    grid-template-rows: 30% auto 30%;
    flex: 1;
}

div.border-container {
    grid-column-start: 2;
    grid-row-start: 2;
    justify-self: stretch;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: 5% auto 5%;
    grid-template-rows: 5% auto 5%;
}

.el-form {
    grid-column-start: 2;
    grid-row-start: 2;
    justify-self: center;
    align-self: center;
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
