<template>
    <div class="container">
		<slot name="alert"></slot>
        <div class="title-container">
            <h1 class="title">
                <slot name="title"></slot>
            </h1>
        </div>
        <div class="border-container">
            <div class="form-container">
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
    display: flex;
    flex-direction: column;
    height: 100%;
}

h1.title {
    align-self: center;
    font-family: 'Noto Sans TC', sans-serif;
    text-shadow: 1px 1px 2px grey;
    padding-top: 40px;
    padding-bottom: 20px;
}

div.border-container {
    padding-top: 20px;
    width: 30%;
    display: flex;
    flex-direction: column;
    align-self: center;
    box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
}

div.form-container {
    align-self: center;
    flex: 1;
}

div.title-container {
    display: flex;
    flex-direction: column;
}


</style>
