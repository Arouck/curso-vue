import Vue from 'vue';

export default new Vue({
    methods: {
        incrementarIdade(idade) {
            this.$emit('incrementoDeIdade', idade);
        },
        atualizarIdade(callback) {
            this.$on('incrementoDeIdade', callback);
        }
    }
});