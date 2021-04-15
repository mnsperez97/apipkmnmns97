//Se llama la API con Fetch
fetch('https://pokeapi.co/api/v2/pokemon')
.then(response => response.json())
.then(json => {
	printPokemons(json.results);
});

//Se llaman los datos del JSON de la API
function printPokemons(pokemons){
	console.log(pokemons)
	const container = document.getElementById('container');
	pokemons.forEach(pokemon => {
		container.innerHTML = `${container.innerHTML}
		<div class="card"> 
			<img src="https://pokeres.bastionbot.org/images/pokemon/${getPokemonId(pokemon.url)}.png"> 
			<span>N°.${getPokemonId(pokemon.url)}</span> 
			<h2>${pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h2>
			${pokemon.stats}
		</div>`;
	});
}

//Se limpia la url para que solo quede el dato llamado
function getPokemonId(url){
	return url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')
}