<template>
    <pageContainer>
    </pageContainer>
</template>

<script>
import pageContainer from 'G/page-container.vue'

export default {
    name: 'verify',
    components: {
        pageContainer,
    },
    data() {
        return {
            expires: null,
            signature: null,
        }
    },
    methods: {
    },
    beforeCreate: function() {
        let queries = this.$route.query;
        console.log(this.$lib.only({"toto": "123", "titi": "1234", "lolo" : "lele"}, ['toto', 'lolo']));
    },
}
</script>
<style scoped>

</style>
