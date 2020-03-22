<template>
    <div class="form-container">
        <div class="input-container">
            <el-input placeholder="Password" v-model="login" name="login"></el-input>
            <el-input placeholder="Login" v-model="password" name="password" show-password></el-input>
        </div>
    </div>
</template>

<script>

export default {
    name: 'login',
    data() {
        return {
            login: '',
            password: ''
        }
    }
}
</script>

<style scoped>

div.input-container {
    grid-column-start: 2;
    grid-row-start: 2;
    justify-self: center;
    align-self: center;
}

div.form-container {
    display: grid;
    width: 100%;
    height: 100%;
    grid-template-columns: 40% auto 40%;
    grid-template-rows: 40% auto 40%;
}
</style>
