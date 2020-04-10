new Vue({
    el: '#desafio',
    data: {
        valor: 0,
    },
    computed: {
        resultado() {
            if(this.valor == 37) {
                return 'Valor Igual';
            } else {
                return 'Valor Diferente';
            }
        },
    },
    watch: {
        resultado() {
            if(this.resultado === 'Valor Igual') {
                setTimeout(() => {
                    this.valor = 0;
                }, 5000);
            }
        },
    },
});