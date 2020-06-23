<template>
    <div class="usuario-editar">
        <h3>Usuário editar</h3>
        <hr>
        <p><strong>Código: </strong>{{ id }}</p>
    </div>
</template>

<script>
export default {
    props: ['id'],
    // data() {
    //     return {
    //         id: this.$route.params.id,
    //     }
    // },

    // watch: {
    //     $route(to, from) {
    //         this.id = to.params.id;
    //     }
    // },
}
</script>

<style>

</style>