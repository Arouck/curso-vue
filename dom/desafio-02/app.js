new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        createAlert() {
            alert("Isso é um alerta!");
        },
        setValor(event) {
            this.valor = event.target.value;
        }
    }
})