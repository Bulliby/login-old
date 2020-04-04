<template>
    <div class="alert">
        <el-alert v-if="$getConst('Alert', 'SUCCESS') === alert" title="Vous etes authenitfie" type="success" center>
        </el-alert>
        <el-alert v-if="$getConst('Alert', 'ERROR') === alert" title="Email ou mot de pass incorect" type="error" center>
        </el-alert>
    </div>
</template>

<script>
export default {
    name: 'alert',
    props: {
        alert: {
            type: Number,
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

