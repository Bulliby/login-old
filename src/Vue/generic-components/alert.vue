<template>
    <div class="alert">
        <el-alert v-if="$getConst('Alert', 'SUCCESS') === alert.type" type="success" center>
            {{ alert.msg }}
        </el-alert>
        <el-alert v-if="$getConst('Alert', 'ERROR') === alert.type" type="error" center>
            {{ alert.msg }}
        </el-alert>
        <el-alert v-if="$getConst('Alert', 'WARNING') === alert.type" type="warning" center>
            {{ alert.msg }}
        </el-alert>
        <el-alert v-if="$getConst('Alert', 'INFO') === alert.type" type="info" center>
            {{ alert.msg }}
        </el-alert>
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
p.el-alert__description {
    font-size: 17px !important;
}
</style>
