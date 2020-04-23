<template>
    <div class="contadores">
        <app-contador v-for="counter in 3" :key="counter" />
    </div>
</template>

<script>
import Contador from "./Contador.vue";
export default {
    components: {
        "app-contador": Contador
    }
};
</script>

<style>
</style>