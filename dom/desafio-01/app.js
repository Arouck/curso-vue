new Vue({
    el: '#desafio',
    data:{
        SEU_NOME: "Pedro",
        IDADE: 20,
        linkImg: 'https://steamcdn-a.akamaihd.net/steam/apps/1030300/header.jpg?t=1572306963'
    },
    methods: {
        gerarNumeroAleatorio() {
            return Math.random();
        }
    }
})