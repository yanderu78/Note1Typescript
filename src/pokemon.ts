class Pokemon implements Pokemon {
    constructor(public name: string,
                public type: string,
                public speed: number) {
        this.name = name;
        this.speed = speed;
        this.type = type;
    }
}