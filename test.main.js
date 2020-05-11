const beginBattle = require('./battle');
const Pokemon = require('./pokemon');

test('test speed', () => {
    const machop = new Pokemon("Machop", "Combat", 4);
    const abra = new Pokemon("Abra", "Psy", 2);
    expect(beginBattle(machop, abra)).toBe(machop);
});