<template>
    <div class="flex-container">
        <span>© Credits to Agnes</span>
    </div>
</template>

<script>

export default {
    name: 'credits',
    data() {
        return {
        }
    },
    methods: {
    },
    created: function () {
    }
}
</script>

<style scoped>

@import url('https://fonts.googleapis.com/css?family=Gotu');

div.flex-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
}

span {
    align-self: center;
    font-family: 'Gotu', sans-serif;
}

</style>
