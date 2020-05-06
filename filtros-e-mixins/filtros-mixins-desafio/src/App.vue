<template>
	<div id="app">
		<h1>Filtros & Mixins (Desafio)</h1>
		<hr>
		<h4>Desafio 1</h4>
		<p>{{ string | desafio1 }}</p>
		<hr>
		<h4>Desafio 2</h4>
		<p>{{ string2 | desafio2 }}</p>
		<hr>
		<h4>Desafio 3</h4>
		<p>{{ desafio3_1 }}</p>
		<p>{{ desafio3_2 }}</p>
		<!-- Exercício 1 -->
		<!-- Construir um filtro local que troca espaços por vírgula -->
		
		<!-- Exercício 2 -->
		<!-- Filtro global que conta o tamanho de cada palavra e adiciona o 
			valor na string final -->
		<!-- "Pedro é legal" => "Pedro (5) é (1) legal (5)" -->

		<!-- Exercício 3 -->
		<!-- Implementar os exercicios 1 e 2 com propriedade computada -->

		<!-- Exercício 4 -->
		<!-- Compartilhe a propriedade computada via mixin -->
	</div>
</template>

<script>
import desafioMixin from './desafioMixin.js';

export default {
	mixins: [desafioMixin],
	data() {
		return {
			string: 'String de teste 1',
			string2: 'String de teste 2',
		}
	},
	filters: {
		desafio1(string) {
			return string.replace(/ /g, ',');
		}
	},
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
