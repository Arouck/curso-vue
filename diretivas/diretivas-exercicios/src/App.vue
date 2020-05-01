<template>
    <div id="app">
        <h1>Diretivas</h1>
        <hr />
        <p v-text="'Usando o v-text!'"></p>
        <p v-html="'Usando o <strong>v-html</strong>!'"></p>
        <hr />
        <p v-destaque.atrasar.alternar="{cor1: 'bisque', cor2: 'black', atraso: 2000, intervalo: 500}">Usando uma diretiva personalizada!</p>
        <p v-destaque:fundo.atrasar.alternar="{cor1: 'lightgreen', cor2: 'pink', atraso: 1000, intervalo: 100}">Usando uma diretiva personalizada!</p>
    </div>
</template>

<script>
export default {
    directives: {
        destaque: {
            bind(el, binding, vnode) {
                const aplicarCor = cor => {
                    if (binding.arg === "fundo") {
                        el.style.backgroundColor = cor;
                    } else {
                        el.style.color = cor;
                    }
                };

                let atraso = 0;
                if (binding.modifiers["atrasar"]) {
                    atraso = binding.value.atraso;
				}
				
                setTimeout(() => {
					if (binding.modifiers['alternar']) {
						let corAtual = binding.value.cor1;
						const cor2 = binding.value.cor2;
						setInterval(() => {
							corAtual = corAtual === binding.value.cor1 ? cor2 : binding.value.cor1;
							aplicarCor(corAtual);
						}, binding.value.intervalo)
					} else {
						aplicarCor(binding.value.cor1);
					}
				}, atraso);
            }
        }
    }
};
</script>

<style>
#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 2.5rem;
}
</style>
