// Função para capturar o parâmetro da URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
const header = document.getElementById('header')
const buttonVoltar = document.getElementById('returnPokedex')
const pokemonName = getQueryParam('name');
const pokemonCard = document.getElementById('pokemon-card');

function convertPokemonToLi(pokemon) {
    return `
        <li class="pokemon ${pokemon.type}">
            
            <span id="number" class="number">#${pokemon.number}</span>

            <img id="pokemon-image" src="${pokemon.photo}"
                        alt="${pokemon.name}">

            <span class="name">${pokemon.name}</span>
                <div id="detail" class="detail">
                    <ol class="types">
                    <p class="name">Tipo: </p>
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <ol class="abilities">
                    <p class="name">Habilidades: </p>
                        ${pokemon.abilities.map((ability) => `<li class="ability ${ability}">${ability}</li>`).join('')}
                    </ol>

                </div>
        </li>
    `
}
     

function loadPokemonItens(name) {
    pokeApi.getPokemon(name)
    .then((pokemon) => {
        const newHtml = convertPokemonToLi(pokemon)
        header.classList.add(pokemon.type);
        buttonVoltar.classList.add( pokemon.type);
        pokemonCard.innerHTML += newHtml
    })
}

loadPokemonItens(pokemonName)






/**
if (pokemonName) {
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            const newHtml = convertPokemonToLi(data)

            pokemonCard.innerHTML += newHtml 
            
        })
        .catch(error => console.error('Erro ao carregar os detalhes do Pokémon:', error));
} else {
    document.getElementById('pokemon-card').innerHTML = '<p>Erro: Pokémon não encontrado.</p>';
}

 `
        <li class="pokemon ${pokemon.type}">
            
            <span class="number">#${pokemon.number}</span>

            <img src="${pokemon.photo}"
                        alt="${pokemon.name}">

            <span class="name">${pokemon.name}</span>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <ol class="abilities">
                        ${pokemon.abilities.map((ability) => `<li class="type ${ability}">${ability}</li>`).join('')}
                    </ol>

                </div>
        </li>
    `
*/


