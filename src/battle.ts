function PokemonInit(a : Pokemon, b : Pokemon)
{
    return a.speed > b.speed ? a : b;
}

function Attack(a : Pokemon, b : Pokemon)
{
    b.pv -= a.attack;
    console.log(b.name + " has sustained " + a.attack + " damage");
    
}

function Battle(a : Pokemon, b : Pokemon)
{
    let firstPokemon : Pokemon = PokemonInit(a, b)
    let secondPokemon : Pokemon = firstPokemon == a ? b : a;

    Attack(firstPokemon, secondPokemon);
    if (secondPokemon.pv <= 0)
    {
        console.log(secondPokemon.name + "has fainted");
        return
    }
    Attack(secondPokemon, firstPokemon);
    if (firstPokemon.pv <= 0)
    {
        console.log(firstPokemon.name + "has fainted");
        return
    }
    console.log(firstPokemon.name + "has fainted");
}