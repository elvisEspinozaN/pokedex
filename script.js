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
const $randomizer = $("input[value='Randomizer']")

// event listeners
$form.on('submit', handleSearch)
$randomizer.on('click', handleRandomizer)

// $randomizer.on("click", function(evt) {
//     evt.preventDefault()

// functions
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