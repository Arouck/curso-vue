<template>
    <div id="app">
        <List />
        <Item />
    </div>
</template>

<script>
import List from "./components/List.vue";
import Item from "./components/Item";
export default {
    name: "App",
    components: {
        List,
        Item
    }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap");

* {
    margin: 0;
    padding: 0;
    outline: none;
    font: 300 20px Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    box-sizing: border-box;
    color: #000545;
}

div#app {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 5% 0 5%;
    height: 100vh;
    background-color: #fafafa;
}
</style>
