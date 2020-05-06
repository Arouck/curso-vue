import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false;

Vue.filter('desafio2', function(string) {
	const arr = string.split(' ');
	let newArr = [];
	arr.forEach(element => {
		newArr.push(element + ' ');
		newArr.push('(' + element.length + ') ');
	});
	return newArr.join('').trim();
})

new Vue({
	render: h => h(App),
}).$mount('#app')
