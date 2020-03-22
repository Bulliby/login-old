<template>
    <div>
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

<style scope></style>
