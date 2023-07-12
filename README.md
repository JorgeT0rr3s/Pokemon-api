# Pokemon-api
Para la funcionalidad de la Pokedex.
1. se declaran la constante del contenedor principal:
    const poke_container = document.getElementById('poke-container').

2. Se declaran la cantidad de tarjetas que se van a crear en una constante:
     const pokemon_count = 150;
   
3. se declara una objeto llamado colors, en la cual se asignan propiedades con los tipos de pokémon y se les asigna un color:
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

4. Se crea una constante tipo array para guardar cada una de las propiedades del objeto colors.
        const main_types = Object.keys(colors)

5. Se crea una funcion asincrona"fetchPokemons" tipo flecha que contiene un bucle for el cual hace un recorrido desde 1 hasta el valor de la variable pokemon_count.

6. Se crea una funcion asincrona llamada "getPokemon la cual requiere el parametro "id"; esta función obtiene la información de la api "poke-api" mediante una solicitud HTTP GET por medio de la URL de la API y la asigna a la variable "data" como parametro para la funcion createPokemonCard.

7. Se crea una funcion llamada "createPokemonCard" en la cual se hace lo sigiente:
   7.1 Adicionar un elemento tipo div al contenedor con la clase "pokemon_container" y asignarle una clase llamada "pokemon".
   7.2 asignar un color a cada typo de pokemon mediante la creacion de un array que tome todos los tipos de pokemon directamente de la           api y los compare con el array ya creado anteriormente.
   7.3 Crear el HTML de una de las card´s de pokemon:
       se requiere un Div para la imagen del pokemon y un div para la informacion del pokémon, con las clases ya usadas en el archivo CSS donde se le asigno estilos.
   7.4 Por ultimo se actualiza el elemento pokémon y se agrega esto como un hijo del contenedor llamado "poke-container"
8. Para finalizar se llama a la funcion "fetchPokemon" para que siga iterando el ciclo for y se pase al siguiente id.
   
      
