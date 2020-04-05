<template>
    <div class="container">
		<slot name="alert"></slot>
        <div class="grid-container">
            <h1 class="title">
                <slot name="title"></slot>
            </h1>
            <div class="border-container">
                <slot name="form"></slot>
            </div>
        </div>
        <credits/>
    </div>
</template>

<script>
import ApiRequester from '../api/ApiRequester'
import credits from '@/credits.vue'

export default {
    name: 'page-container',
    components: {
        credits,
    },
    data() {
        return {
        }
    },
    methods: {
        connect: function () {
        }
    },
    created: function () {
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
