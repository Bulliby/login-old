<template>
    <div class="alert">
        <el-alert v-if="$getConst('Alert', 'SUCCESS') === alert" type="success" center>
            <slot name="success">
                No success message defined
            </slot>
        </el-alert>
        <el-alert v-if="$getConst('Alert', 'ERROR') === alert" type="error" center>
            <slot name="error">
                No error message defined
            </slot>
        </el-alert>
        <el-alert v-if="$getConst('Alert', 'WARNING') === alert" type="warning" center>
            <slot name="warning">
                No waring message defined
            </slot>
        </el-alert>
        <el-alert v-if="$getConst('Alert', 'INFO') === alert" type="info" center>
            <slot name="warning">
                No info message defined
            </slot>
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

