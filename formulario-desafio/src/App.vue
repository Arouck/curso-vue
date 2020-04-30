<template>
    <div id="app">
        <h1>Formulário Desafio</h1>
        <div class="conteudo">
            <form class="painel" v-if="!submited">
                <div class="cabecalho">Formulário</div>
                <!-- Exercicio 01 -->
                <!-- Criar uma formulário de registro -->
                <!-- Nome completo (Nome e Sobrenome) -->
                <!-- Email -->
                <!-- Senha -->
                <!-- Armazenar Dados? (Sim/Não) -->
                <Rotulo :nome="'First Name'">
                    <input type="text" v-model="user.firstName" />
                </Rotulo>

                <Rotulo :nome="'Last Name'">
                    <input type="text" v-model="user.lastName" />
                </Rotulo>

                <Rotulo :nome="'Email'">
                    <input type="email" v-model="user.email" />
                </Rotulo>

                <Rotulo :nome="'Password'">
                    <input type="password" v-model="user.password" />
                </Rotulo>

                <Rotulo :nome="'Store data?'">
                    <div class="options">
                        <span>
                            <input type="radio" :value="true" v-model="stored" /> Yes
                        </span>
                        <span>
                            <input type="radio" :value="false" v-model="stored" /> No
                        </span>
                    </div>
                </Rotulo>
                <hr />
                <button @click.prevent="sendData">Send</button>

                <!-- Exercicio 02 -->
                <!-- Só mostrar o fomulário de não tiver sido submetido -->
                <!-- Mostrar a área de Resultado apenas quando o formulário for submetido -->

                <!-- Exercicio 03 -->
                <!-- Crie um componente personalizado NomeCompleto -->
                <!-- Esse componente deve receber Nome e Sobrenome -->
            </form>
            <div class="painel" v-else>
                <div class="cabecalho">Resultado</div>
                <Name :firstName="user.firstName" :lastName="user.lastName" />
                <hr />
                <Rotulo :nome="'Email'">
                    <span>{{ user.email }}</span>
                </Rotulo>

                <Rotulo :nome="'Password'">
                    <span>{{ user.password }}</span>
                </Rotulo>
                <hr />
                <button class="undo" @click.prevent="sendData">Undo</button>
            </div>
        </div>
    </div>
</template>

<script>
import Rotulo from "./components/Rotulo.vue";
import Name from "./components/Name.vue";

export default {
    name: "app",
    components: { Rotulo, Name },
    data() {
        return {
            stored: false,
            submited: false,
            user: {
                firstName: "",
                lastName: "",
                email: "",
                password: ""
            }
        };
    },
    methods: {
        sendData() {
            if (
                this.user.firstName &&
                this.user.lastName &&
                this.user.email &&
				this.user.password &&
				this.stored != false
            ) {
                this.submited = !this.submited;
			} else {
				alert('Please, be sure that all fields are filled and the "yes" option is selcted on radio!')
			}
        }
    }
};
</script>

<style>
body {
    background-color: #ececec;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;

    display: flex;
    flex-direction: column;
}

.conteudo {
    display: flex;
    width: 50%;
    position: absolute;
    right: 25%;
    top: 15%;
}

.painel {
    flex: 1;
    background: #fff;
    margin: 0px 10px;
    padding: 20px;
    border: 1px solid #aaa;
    border-radius: 5px;
}

.painel .cabecalho {
    width: 100%;
    background-color: #ddd;
    padding: 10px 0px;
    border-radius: 5px;
    font-size: 1.4rem;
}

#app form button {
    float: right;
    margin: 10px 0px;
    padding: 10px 20px;
    font-size: 1.4rem;
    border-radius: 5px;
    color: #fff;
    background-color: #2196f3;
}

#app h1 {
    font-weight: 200;
    margin: 20px;
    padding: 0;
}

.mr-4 {
    margin-right: 40px;
}

.options {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    padding: 0 40% 0 40%;
}

.painel button {
    float: right;
    margin: 10px 0px;
    padding: 10px 20px;
    font-size: 1.4rem;
    border-radius: 5px;
    color: #fff;
    background-color: #2196f3;
}
</style>
