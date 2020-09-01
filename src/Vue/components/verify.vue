<template>
    <!-- TODO hide border in page container !-->
    <pageContainer>
        <template v-slot:alert>
            <alert :alert="alert"/>
        </template>
    </pageContainer>
</template>

<script>
import pageContainer from 'G/page-container.vue'
import alert from 'G/alert.vue'
/** TODO @ in this line check how it works **/
import * as Fn from '@waxer42/js-lib/only'

export default {
    name: 'verify',
    components: {
        pageContainer,
        alert
    },
    data() {
        return {
            expires: null,
            signature: null,
            alert: {
                type: this.$getConst('Alert', 'NOTHING'),
                msg: ""
            },
        }
    },
    methods: {
    },
    beforeCreate: function() {
        let queries = this.$route.query;
        queries = Fn.only(queries, ['expires', 'signature', 'hash', 'id']);
        //TODO Global tool
        if (queries.expires == undefined || queries.signature == undefined || queries.hash == undefined || queries.id == undefined) {
            throw new Error('Query not well formated expires and signature are mandatory field of url');
        }

        this.$apiRequester.verifyEmail(queries)
        .then((response) => {
            if (response.status == this.$getConst('HttpCode', 'NOCONTENT')) {
                this.alert = {
                    type: this.$getConst('Alert', 'SUCCESS'),
                    msg: "Votre email est validé"
                }
            } else {
                throw new Error(this.$getConst('General', 'UNEXPECTED_BEHAVIOUR'));
            }
        }).catch((errors) => {
            if (errors.response.status == this.$getConst('HttpCode', 'UNAUTHORIZED')) {
                this.alert = {
                    type: this.$getConst('Alert', 'ERROR'),
                    msg: "Votre email n'a pas pu être validé ré-éssayez ou contactez un administrateur"
                }
            }
            else {
                throw new Error(this.$getConst('General', 'UNEXPECTED_BEHAVIOUR'));
            }
        });
    },
}
</script>
<style scoped>

</style>
