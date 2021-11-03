$(function(){

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
const $random = $('#random')

// event listeners
$form.on('submit', handleSearch)
$random.on('click', handleRandom)
// functions

function handleRandom(e){
    e.preventDefault();
    const pokemonId = Math.floor(Math.random() * 700) + 1
    $.ajax(`${BASE_URL}${pokemonId}`)
    .then(function(data){
        pokemonData = data
        render();
    }, function(error){
        console.log("error here: ", error);
    });
}

function handleSearch(e){
    e.preventDefault();
    const pokemonName = $input.val();
    $.ajax(`${BASE_URL}${pokemonName}`)
        .then(function(data){
            pokemonData = data
            render();
        }, function(error){
            console.log("error here: ", error);
        });
}

function render(){
    $main.html(`
    <img id='img' src="${pokemonData.sprites.front_default}" alt="${pokemonData.name}" />
    <p class='mainEl' id='idEl' >Pokedex Number: </p>
    <p class='mainEl' id="id"># ${pokemonData.id}</p>
    <p class='mainEl' id='nameEl' >Name: </p>
    <p class='mainEl' id="name">${pokemonData.name}</p>
    <p class='mainEl' id='moveEl' >Move: </p>
    <p class='mainEl' id="move">${pokemonData.moves[16].move.name}</p>
    <p class='mainEl' id='statEl' >Base Stat: </p>
    <p class='mainEl' id="stat">${pokemonData.stats[0].base_stat}</p>
    `);
}






})