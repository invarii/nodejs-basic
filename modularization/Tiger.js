class Tiger {
    constructor() {
        this.strength = Math.floor(Math.random() * 1000);
    }

    growl() {
        console.log('grrrrr!')
    }
}

module.exports = Tiger;