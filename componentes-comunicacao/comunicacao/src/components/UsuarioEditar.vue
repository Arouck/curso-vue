<template>
    <div class="componente">
        <h2>Alterar os Dados de Usuário</h2>
        <p>Edite as informações</p>
        <p>
            Idade do usuáio:
            <strong>{{ idade }}</strong>
        </p>
        <button @click="incrementarIdade">Incrementar Idade</button>
        <button @click="callbackIncrementarIdade">Incrementar Idade (CALLBACK)</button>
    </div>
</template>

<script>
import eventBus from '../eventBus';

export default {
    props: {
        idade: Number,
        callbackIncrementarIdade: Function,
    },
    methods: {
        incrementarIdade() {
            eventBus.incrementarIdade(++this.idade);
        }
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #98b99a;
        color: #fff;
    }
</style>
