<template>
    <div>
        <v-alert v-if="$getConst('Alert', 'SUCCESS') === alert.type" type="success">
            {{ alert.msg }}
        </v-alert>
        <v-alert v-if="$getConst('Alert', 'ERROR') === alert.type" type="error">
            {{ alert.msg }}
        </v-alert>
        <v-alert v-if="$getConst('Alert', 'WARNING') === alert.type" type="warning">
            {{ alert.msg }}
        </v-alert>
        <v-alert v-if="$getConst('Alert', 'INFO') === alert.type" type="info">
            {{ alert.msg }}
        </v-alert>
    </div>
</template>

<script>
export default {
    name: 'alert',
    props: {
        alert: {
            type: Object,
        }
    },
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

<style>
.v-alert {
    text-align: center;
}
</style>
