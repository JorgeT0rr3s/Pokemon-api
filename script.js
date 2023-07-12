const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
	electric: '#FCF7DE',
	water: '#DEF3FD',
	ground: '#f4e7da',
	rock: '#d5d5d4',
	fairy: '#fceaff',
	poison: '#98d7a5',
	bug: '#f8d5a3',
	dragon: '#97b3e6',
	psychic: '#eaeda1',
	flying: '#F5F5F5',
	fighting: '#E6E0D4',
	normal: '#F5F5F5'
}

const main_types = Object.keys(colors)

const fetchPokemons = async () => {
    for(let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    
}

fetchPokemons()

function generarDivs() {

for (var i = 0; i < pokemon_count; i++) {
	// Crear elemento div con la clase "pokemon"
	var div = document.createElement('div');
	div.classList.add('pokemon');
	div.style.backgroundColor = ''; // depende el tipo de pokemón

	// Crear div con la clase "img-container" para la imagen
	var imgContainer = document.createElement('div');
	imgContainer.classList.add('img-container');

	// Crear imagen
	var img = document.createElement('img');
	img.src = ''; // Cambia la URL de la imagen según tus necesidades
	img.alt = ''; // Cambia el texto alternativo de la imagen según tus necesidades
	imgContainer.appendChild(img);
	div.appendChild(imgContainer);

	// Crear div con la clase "info" para la información
	var info = document.createElement('div');
	info.classList.add('info');

	// Crear span con la clase "number" para el número del Pokémon
	var number = document.createElement('span');
	number.classList.add('number');
	number.textContent = '';
	info.appendChild(number);

	// Crear h3 con la clase "name" para el nombre del Pokémon
	var name = document.createElement('h3');
	name.classList.add('name');
	name.textContent = '';
	info.appendChild(name);

	// Crear small con la clase "type" para el tipo del Pokémon
	var type = document.createElement('small');
	type.classList.add('type');
	type.textContent = 'Type: ';
	var typeSpan = document.createElement('span');
	typeSpan.textContent = ''; // Cambia el tipo del Pokémon según tus necesidades
	type.appendChild(typeSpan);
	info.appendChild(type);

	div.appendChild(info);

	// Agregar el div al contenedor
	poke_container.appendChild(div);
}
}

generarDivs();

