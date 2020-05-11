function beginBattle(a : Pokemon, b : Pokemon)
{
    return a.speed > b.speed ? a : b;
}