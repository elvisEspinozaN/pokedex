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
const $abilities = $('#abilities');
const $height = $('#height');

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
    <p>Name:</p>
    <p id="name">${pokemonData.name}</p>
    <p id="moves">${pokemonData.moves}</p>
    <p id="abilities">${pokemonData.abilities}</p>
    <p id="height">${pokemonData.height}</p>
    `);
}