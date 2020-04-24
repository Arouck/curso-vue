import Vue from 'vue';

export default new Vue({
    methods: {
        selectPerson(personInfo) {
            //console.log(`selectPerson - ${person.name}, ${index}`);
            this.$emit('selectedPerson', personInfo);
        },

        updateSelectedPerson(personInfo) {
            //console.log('updateSelectedPerson');
            this.$on('selectedPerson', personInfo);
        }
    }
});