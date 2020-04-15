new Vue({
    el: '#app',
    data: {
        playerPointsOfLife: '100%',
        monsterPointsOfLife: '100%',
        isPlaying: false,
        actionsIsEmpty: true,
        points: 0,
        action: {},
        actions: [],
    },
    methods: {
        changeIsPlaying() {
            if (this.isPlaying) {
                this.actions = [];
                this.action = {};
                this.actionsIsEmpty = true;
            }
            this.isPlaying = !this.isPlaying;
        },

        generateRandomNumber(maxNumber, minNumber) {
            return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
        },

        createAction(actionType, points, message) {
            this.action = {
                type: actionType,
                points: points,
                message: message
            }
            this.actionsIsEmpty = false;
            this.actions.push(this.action);
        },

        generatePlayerAttack() {
            const attackPoints = Math.floor(this.generateRandomNumber(10, 0));
            this.monsterPointsOfLife -= attackPoints;
            this.createAction('player_attack', attackPoints, `Player inflicts ${attackPoints} points of damage`);
            this.generateMonsterAttack();
        },

        generatePlayerHeal() {
            let healPoints = Math.floor(this.generateRandomNumber(13, 0));
            if(this.playerPointsOfLife === '100%') {
                this.createAction('player_heal', 0, `Player heals ${0} points of life, because its life is already full`);
                this.generateMonsterAttack();
            } else if (this.playerPointsOfLife + healPoints > 100) {
                healPoints = 100 - this.playerPointsOfLife;
                this.playerPointsOfLife += healPoints;
                this.createAction('player_heal', healPoints, `Player heals ${healPoints} points of life`);
                this.generateMonsterAttack();
            } else {
                this.playerPointsOfLife += healPoints;
                this.createAction('player_heal', healPoints, `Player heals ${healPoints} points of life`);
                this.generateMonsterAttack();
            }
        },

        generatePlayerSpecialAttack() {
            const attackPoints = Math.floor(this.generateRandomNumber(10, 0) * Math.random() * 3);
            const isCritical = this.decideIfIsACriticalAttack(attackPoints, 10);
            if(monsterPointsOfLife - attackPoints < 0){
                monsterPointsOfLife = 0;
            } else {
                this.monsterPointsOfLife -= attackPoints;
            }
            if(isCritical) {
                this.createAction('player_special_attack', attackPoints, `Player inflicts ${attackPoints} points of damage - CRITICAL`);
            } else{
                this.createAction('player_special_attack', attackPoints, `Player inflicts ${attackPoints} points of damage`);
            }
            this.generateMonsterAttack();
        },

        generateMonsterAttack() {
            const attackPoints = Math.floor(this.generateRandomNumber(10, 0));
            this.playerPointsOfLife -= attackPoints;
            this.createAction('monster_attack', attackPoints, `Monster inflicts ${attackPoints} points of damage`);
        },

        decideIfIsACriticalAttack(attackPoints, maxAttack) {
            if (attackPoints > (maxAttack * 1.5)) {
                return true;
            } else {
                return false;
            }
        },
    },
});