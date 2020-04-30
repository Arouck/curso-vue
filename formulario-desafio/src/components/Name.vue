<template>
    <div>
        <Rotulo :nome="'First Name'">
            <span>{{ firstName }}</span>
        </Rotulo>

        <Rotulo :nome="'Last Name'">
            <span>{{ lastName }}</span>
        </Rotulo>
    </div>
</template>

<script>
import Rotulo from "./Rotulo.vue";

export default {
    props: {
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        }
    },
    components: { Rotulo }
};
</script>

<style>
</style>