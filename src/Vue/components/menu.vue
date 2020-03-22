<template>
    <el-menu 
        :default-active="activeIndex" 
        class="el-menu-demo" 
        mode="horizontal" 
        background-color="#FFFFFF"
        @select="handleSelect">
        <el-menu-item index="1"><router-link to="/login">Log in</router-link></el-menu-item>
        <el-menu-item index="2"><router-link to="/home">Home</router-link></el-menu-item>
        <el-menu-item index="3"><router-link to="/signup">Signup</router-link></el-menu-item>
        <el-menu-item index="4"><router-link to="/forgot-password">Forgot-password</router-link></el-menu-item>
    </el-menu>
</template>

<script>

export default {
    name: 'headerMenu',
    data() {
        return {
            activeIndex: '1',
            activeIndex2: '1'
        };
    },
    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}
</script>

<style scope>
</style>
