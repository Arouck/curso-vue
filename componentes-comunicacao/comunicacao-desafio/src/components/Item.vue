<template>
    <div id="item">
        <div id="itemHeader">
            <h1 v-show="!isPersonSelected">Usuário não selecionado!</h1>
        </div>
        <div id="info" v-show="isPersonSelected">
            <ul>
                <li>ID: {{ id }}</li>
                <li>Nome: {{ person.name }}</li>
                <li>Idade: {{ person.idade }}</li>
            </ul>
        </div>
    </div>
</template>

<script>
import eventBus from "../eventBus";

export default {
    data() {
        return {
            isPersonSelected: false,
            person: { name: "", idade: 0 },
            id: null
        };
    },

    created() {
        eventBus.updateSelectedPerson(personInfo => {
            if (!this.isPersonSelected) {
                this.isPersonSelected = true;
            }
            this.person = personInfo[0];
            this.id = personInfo[1] + 1;
        });
    }
};
</script>

<style scoped>
div#item {
    display: flex;
    width: 40%;
    height: 30vh;
    padding: 1% 2% 1% 2%;
    border: 1px solid #d9d9d9;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 0 2vh #c9c9c9;
}

div#itemHeader h1 {
    margin-top: 1%;
    font-weight: 700;
    font-size: 30px;
}

div#itemHeader {
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
}

div#info {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
}

div#info ul {
    width: 100%;
    list-style: none;
    display:flex;
    flex-direction: column;
    align-items: center;
}

div#info ul li {
    font-weight: 500;
    font-size: 25px;
    text-align: center;
    line-height: 8vh;
}
</style>
