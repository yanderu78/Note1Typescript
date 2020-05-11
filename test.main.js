const PokemonInit = require('./battle');
const Battle = require('./battle');
const Pokemon = require('./pokemon');

test('test speed', () => {
    const machop = new Pokemon("Machop", "Combat", 4);
    const abra = new Pokemon("Abra", "Psy", 2);
    expect(PokemonInit(machop, abra)).toBe(machop);
});

test1('test battle turn, A dead', () => {
    const machop = new Pokemon("Machop", "Combat", 4, 50, 40);
    const abra = new Pokemon("Abra", "Psy", 6, 40, 10);
    Battle(machop, abra)
    expect(abra.pv).toBe(0);
});

test2('test battle turn, A not dead', () => {
    const machop = new Pokemon("Machop", "Combat", 4, 50, 40);
    const abra = new Pokemon("Abra", "Psy", 2, 40, 10);
    Battle(machop, abra)
    expect(machop.pv).toBe(40);
});

test3('test battle turn, A dead, B not damaged', () => {
    const machop = new Pokemon("Machop", "Combat", 4, 50, 40);
    const abra = new Pokemon("Abra", "Psy", 6, 40, 50);
    Battle(machop, abra)
    expect(abra.pv).toBe(40);
});