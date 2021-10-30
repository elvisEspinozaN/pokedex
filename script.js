// constant
const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'

// state variables
let pokemonData;

// cached element references
const $main = $('main');
const $form = $('form');
const $input = $("input[type='text']");
const $name = $('#name');
const $moves = $('#moves');
const $stats = $('#stats');
const $id = $('#id');

// event listeners
$form.on('submit', handleSearch)

// functions
function handleSearch(e){
    e.preventDefault();
    const pokemonName = $input.val();

    $.ajax(`${BASE_URL}${pokemonName}`)
        .then(function(data){
            pokemonData = data
            render();
        }, function(error){
            console.log(error);
        });
}

function render(){
    $main.html(`
    <img src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}" />
    <p>Pokedex Number: </p>
    <p id="id"># ${pokemonData.id}</p>
    <p>Name: </p>
    <p id="name">${pokemonData.name}</p>
    <p>Move: </p>
    <p id="moves">${pokemonData.moves[0].move.name}, ${pokemonData.moves[1].move.name} & ${pokemonData.moves[5].move.name}</p>
    <p>Base Stat: </p>
    <p id="stats">${pokemonData.stats[0].base_stat}</p>
    `);
}