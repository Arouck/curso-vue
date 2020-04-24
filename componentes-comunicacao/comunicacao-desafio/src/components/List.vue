<template>
    <div id="list">
        <ul>
            <div class="listHeader">
                <h2>#ID</h2>
                <h2>Nome</h2>
            </div>
            <li
                v-for="(person, index) in peopleList"
                :key="index"
                @click="selectPerson(person, index)"
            >
                <div class="id">{{ index + 1 }}</div>
                <div class="name">{{ person.name }}</div>
            </li>
        </ul>
    </div>
</template>

<script>
import eventBus from "../eventBus";

export default {
    data() {
        return {
            peopleList: [
                {
                    name: "Ana",
                    idade: 20
                },
                {
                    name: "Carlos",
                    idade: 21
                },
                {
                    name: "Daniel",
                    idade: 33
                },
                {
                    name: "Ema",
                    idade: 19
                },
                {
                    name: "Lia",
                    idade: 41
                }
            ]
        };
    },
    methods: {
        selectPerson(person, index) {
            eventBus.selectPerson([person, index]);
        }
    }
};
</script>

<style scoped>
div#list {
    width: 40%;
    display: flex;
    height: 50vh;
    align-items: center;
    justify-content: center;
}

div#list ul {
    list-style: none;
    border-top: 2px solid #d9d9d9;
    border-bottom: 2px solid #d9d9d9;
    width: 100%;
    align-items: center;
    text-align: center;
    justify-content: center;
    background-color: #fff;
    box-shadow: 0 0 2vh #c9c9c9;
}

div#list ul li {
    display: flex;
    justify-content: space-between;
    border-top: 1px solid #d9d9d9;
    padding: 2% 30% 2% 30%;
    width: 100%;
}

div#list ul li:hover {
    background-color: #d9d9d9;
    transition: 0.5s;
}

div.listHeader h2 {
    font-weight: 700;
    font-size: 20px;
}

div.listHeader {
    display: flex;
    justify-content: space-between;
    padding: 1% 30% 1% 30%;
}
</style>
