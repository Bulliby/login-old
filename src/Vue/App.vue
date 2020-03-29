<template>
    <div id="app">
        <headerMenu/>
        <router-view/>
    </div> 
</template>

<script>
import headerMenu from '@/menu.vue'

export default {
    name: 'App',
    components: {
        headerMenu
    },
}
</script>

<style>
#app {
    height: 100%;
    display: flex;
    flex-direction: column;
}
</style>
