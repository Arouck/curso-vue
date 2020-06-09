<template>
    <div id="app" class="container">
        <!-- <h1>Animações</h1>
        <hr />
        <b-button variant="primary" class="mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>

        <transition name="fade" appear>
            <b-alert variant="info" show v-if="exibir">{{ mensagem }}</b-alert>
        </transition>

        <hr />

        <b-select v-model="tipoAnimacao">
            <option value="fade">Fade</option>
            <option value="slide">Slide</option>
        </b-select>

        <transition :name="tipoAnimacao" mode="out-in">
            <b-alert variant="info" show v-if="exibir" key="info">{{ mensagem }}</b-alert>
            <b-alert variant="warning" show v-else key="warn">{{ mensagem }}</b-alert>
        </transition>

        <hr />

        <button @click="exibir2 = !exibir2">Alternar</button>

        <transition
            @before-enter="beforeEnter"
            @enter="enter"
            @before-leave="beforeLeave"
            @leave="leave"
        >
            <div v-if="exibir2" class="caixa"></div>
        </transition>

        <hr />
        <div class="mb-4">
            <b-button
                variant="primary"
                class="mr-4"
                @click="componenteSelecionado = 'AlertaInfo'"
            >Info</b-button>
            <b-button
                variant="secondary"
                @click="componenteSelecionado = 'AlertaAdvertencia'"
            >Advertencia</b-button>
        </div>
        <transition name="fade" mode="out-in">
            <component :is="componenteSelecionado"></component>
        </transition>-->

        <hr />
        <b-button variant="primary" @click="adicionarAluno" class="mb-4">Adicionar Aluno</b-button>
        <transition-group name="slide" tag="div">
            <b-list-group v-for="(aluno, i) in alunos" :key="aluno">
                <b-list-group-item @click="removerAluno(i)">{{ aluno }}</b-list-group-item>
            </b-list-group>
        </transition-group>
    </div>
</template>

<script>
import AlertaAdvertencia from "./AlertaAdvertencia.vue";
import AlertaInfo from "./AlertaInfo.vue";

export default {
    components: { AlertaAdvertencia, AlertaInfo },
    data() {
        return {
            mensagem: "Mensagem exibida para o usuário!",
            exibir: false,
            exibir2: true,
            tipoAnimacao: "fade",
            larguraBase: 0,
            componenteSelecionado: "AlertaInfo",
            alunos: ["Roberto", "Julia", "Daniel", "Teresa"]
        };
    },
    methods: {
        adicionarAluno() {
            const novoAluno = Math.random()
                .toString(36)
                .substring(2);
            this.alunos.push(novoAluno);
        },
        removerAluno(indice) {
            this.alunos.splice(indice, 1);
        },
        animar(el, done, negativo) {
            let rodada = 1;
            const temporizador = setInterval(() => {
                const novaLargura =
                    this.larguraBase + (negativo ? -rodada * 10 : rodada * 10);
                el.style.width = `${novaLargura}px`;
                rodada++;
                if (rodada > 30) {
                    clearInterval(temporizador);
                    done();
                }
            }, 20);
        },
        beforeEnter(el) {
            this.larguraBase = 0;
            el.style.width = `${this.larguraBase}px`;
        },
        enter(el, done) {
            this.animar(el, done, false);
        },
        // afterEnter(el) {
        // 	console.log('afterEnter');
        // },
        // enterCancelled() {
        // 	console.log('enterCancelled');
        // },
        beforeLeave(el) {
            this.larguraBase = 300;
            el.style.width = `${this.larguraBase}px`;
        },
        leave(el, done) {
            this.animar(el, done, true);
        }
        // afterLeave(el) {
        // 	console.log('afterLeave');
        // },
        // leaveCancelled() {
        // 	console.log('leaveCancelled');
        // }
    }
};
</script>

<style>
.caixa {
    height: 100px;
    width: 300px;
    margin: 30px auto;
    background-color: lightgreen;
}

#app {
    font-family: "Avenir", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    font-size: 1.5rem;
}

.fade-enter,
.fade-leave-to {
    opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 2s;
}

@keyframes slide-in {
    from {
        transform: translateY(40px);
    }
    to {
        transform: translateY(0);
    }
}

@keyframes slide-out {
    from {
        transform: translateY(0);
    }
    to {
        transform: translateY(40px);
    }
}

.slide-enter-active {
    animation: slide-in 2s ease;
    transition: opacity 2s;
}

.slide-leave-active {
    position: absolute;
    animation: slide-out 2s ease;
    transition: opacity 2s;
}

.slide-enter,
.slide-leave-to {
    opacity: 0;
}

.slide-move {
    transition: transform 1s;
}
</style>
