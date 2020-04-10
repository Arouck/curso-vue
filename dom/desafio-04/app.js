new Vue({
	el: '#desafio',
	data: {
		classeCSS1: 'destaque',
		classeCSS2: 'exemplo',
		classeCSS3: 'bola',
		classeCSS4: true,
		estilo: 'estilo1',
		estilo1: {
			backgroundColor: 'red',
			height: '100px',
			width: '100px',
			border: '1px solid black'
		},
		estilo2: {
			backgroundColor: 'blue',
			height: '100px',
			width: '100px',
			border: '1px solid black',
			borderRadius: '50px'
		},
		progresso: 0,
		corProgresso: 'green',
	},
	computed: {
		verificarClasseCSS4() {
			return this.classeCSS4 == true ?
				{
					backgroundColor: 'green',
				} :
				{
					backgroundColor: 'pink',
				}
		},
		alterarEstilo() {
			return this.estilo === 'estilo1' ?
				this.estilo1 :
				this.estilo2
		},
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classeCSS1 = this.classeCSS1 === 'destaque' ? 'encolher' : 'destaque';
			}, 1000);
		},
		iniciarProgresso() {
			let valor = 0;
			const temporizador = setInterval(() => {
				valor += 1;
				this.progresso = `${valor}%`;
				if(valor == 100) {
					clearInterval(temporizador);
				}
			}, 50);
		}
	}
})
