<template>
    <v-app>
        <div class="container">
            <slot name="alert"></slot>
            <div class="title-container">
                <div class="title">
                    <slot name="title"></slot>
                </div>
            </div>
            <div class="border-container">
                <div class="form-container">
                    <slot name="form"></slot>
                </div>
            </div>
            <credits>© Credits to Agnes</credits>
        </div>
    </v-app>
</template>

<script>
import ApiRequester from '../api/ApiRequester'
import credits from 'G/credits.vue'

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



div.container {
    display: flex;
    flex-direction: column;
    height: 100%;
}

div.title {
    align-self: center;
    padding-top: 40px;
    padding-bottom: 60px;
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
    width: 90%;
    align-self: center;
    flex: 1;
}

div.title-container {
    display: flex;
    flex-direction: column;
}
</style>
