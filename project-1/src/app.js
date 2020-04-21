new Vue({
    el: '#app',
    data: {
        playerPointsOfLife: 100,
        monsterPointsOfLife: 100,
        isPlaying: false,
        actionsIsEmpty: true,
        points: 0,
        action: {},
        actions: [],
        finished: false,
    },
    methods: {
        changeIsPlaying() {
            if (this.isPlaying && !this.finished) {
                this.actions = [];
                this.action = {};
                this.actionsIsEmpty = true;
                this.playerPointsOfLife = 100;
                this.monsterPointsOfLife = 100;
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
            this.decreaseMonstersLife(attackPoints);
            this.createAction('player_attack', attackPoints, `Player inflicts ${attackPoints} points of damage`);
            this.generateMonsterAttack();
        },

        generatePlayerHeal() {
            let healPoints = Math.floor(this.generateRandomNumber(13, 0));
            this.increasePlayersLife(healPoints);
        },

        generatePlayerSpecialAttack() {
            const attackPoints = Math.floor(this.generateRandomNumber(10, 0) * Math.random() * 3);
            const isCritical = this.decideIfIsACriticalAttack(attackPoints, 10);
            this.decreaseMonstersLife(attackPoints);
            if (isCritical) {
                this.createAction('player_special_attack', attackPoints, `Player inflicts ${attackPoints} points of damage - CRITICAL`);
            } else {
                this.createAction('player_special_attack', attackPoints, `Player inflicts ${attackPoints} points of damage`);
            }
            this.generateMonsterAttack();
        },

        generateMonsterAttack() {
            const attackPoints = Math.floor(this.generateRandomNumber(12, 0));
            this.decreasePlayersLife(attackPoints);
            this.createAction('monster_attack', attackPoints, `Monster inflicts ${attackPoints} points of damage`);
        },

        decideIfIsACriticalAttack(attackPoints, maxAttack) {
            if (attackPoints > (maxAttack * 1.5)) {
                return true;
            } else {
                return false;
            }
        },

        decreasePlayersLife(attackPoints) {
            if (this.playerPointsOfLife - attackPoints < 0) {
                this.playerPointsOfLife = 0;
                this.finish();
            } else {
                this.playerPointsOfLife -= attackPoints;
            }
        },

        decreaseMonstersLife(attackPoints) {
            if (this.monsterPointsOfLife - attackPoints < 0) {
                this.monsterPointsOfLife = 0;
                this.finish();
            } else {
                this.monsterPointsOfLife -= attackPoints;
            }
        },

        increasePlayersLife(healPoints) {
            if (this.playerPointsOfLife === 100) {
                healPoints = 0;
            } else if (this.playerPointsOfLife + healPoints > 100) {
                healPoints = 100 - this.playerPointsOfLife;
            } else {
                this.playerPointsOfLife += healPoints;
            }
            this.createAction('player_heal', healPoints, `Player heals ${healPoints} points of life`);
            this.generateMonsterAttack();
        },

        finish() {
            this.finished = true;
        }
    },
});