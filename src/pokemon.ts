class Pokemon implements Pokemon {
    constructor(public name: string,
                public type: string,
                public speed: number,
                public pv: number = 50,
                public attack: number = 20) {
        this.name = name;
        this.speed = speed;
        this.type = type;
        this.pv = pv;
        this.attack = attack;
    }
}