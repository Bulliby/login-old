<template>
    <!--div class="grid-container" ref="gridContainerJs" v-on:menu-create-get-size="`height: calc(100% - ${this.contentSize}px);`"!-->
    <div class="grid-container" v-on:menu-created-get-size="test()">
        <h2 class="title">
            Belotte en Ligne
        </h2>
        <div class="border-container">
            <el-form>
                <el-form-item label="Login :">
                    <el-input placeholder="Your email" v-model="password" name="password" show-password></el-input>
                </el-form-item>
                <el-form-item label="Password :">
                    <el-input placeholder="Your password" v-model="login" name="login"></el-input>
                </el-form-item>
                <el-button>Se connecter</el-button>
            </el-form>
        </div>
    </div>
</template>

<script>

export default {
    name: 'login',
    data() {
        return {
            login: '',
            password: '',
            contentSize: 0,
        }
    },
    methods: {
        test() {
            console.log("hello");
        }
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family==Baloo+2&display=swap"');

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
}

div.grid-container h2.title {
    font-family: 'Baloo2', sans-serif;
    grid-column-start: 2;
    grid-row-start: 1;
    justify-self: center;
    align-self: end;
}

</style>
