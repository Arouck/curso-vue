export default {
    computed: {
		desafio3_1() {
			return this.string.replace(/ /g, ",");
		},

		desafio3_2() {
			let newString = [];
			this.string2.split(' ').forEach(element => {
				newString.push(element + ' ');
				newString.push('(' + element.length + ') ');
			});
			return newString.join('').trim();
		},
	},
}