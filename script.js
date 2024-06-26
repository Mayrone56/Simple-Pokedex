// Insert your code here

// document.querySelector("#pokemonContainer").innerHTML = `
// <div class="pokemon fairy">
//  <div class="imgContainer">
//    <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png" alt="Clefairy" />
//  </div>
//  <div class="info">
//    <h3 class="name">Clefairy</h3>
//    <span class="type">Type: <span>fairy</span></span>
//  </div>
// </div>
// `;

// const urlAllPokemon = "https://pokeapi.co/api/v2/pokemon?offset=0&limit=15";
const urlAllPokemon = "https://pokeapi.co/api/v2/pokemon/";
// const urlImg =
// "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png";

// fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=15")
//   .then((response) => response.json())
//   .then((data) => {
//     // console.log("DATA", data.results);
//     // console.log("DATA", data.results.length);
//     for (let i = 0; i <= 15; i++) {
//       console.log("DATA", data.results[i].name);
//       document.querySelector("#pokemonContainer").innerHTML += `
//         <div class="pokemon fairy">
//             <div class="imgContainer">
//                 <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/[i].png" alt="${data.results[i].name}" />
//                 </div>
//                 <div class="info">
//                 <h3 class="name">${data.results[i].name}</h3>
//                 <span class="type">Type: <span>fairy</span></span>
//             </div>
//         </div>
//         `;
//     }
//   });

//POKEMON LIST
let offset = 1;
let pokemonsNumber = 15;
function pokemonList() {
  for (let i = offset; i <= pokemonsNumber; i++) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${[i]}`)
      .then((response) => response.json())
      .then((data) => {
        // console.log("DATA", data);
        // console.log("DATA TYPE", data.types[0].type.name);
        // console.log("DATA sprites", data.sprites.front_default);
        const pokemonNameFirstLetter = data.name.slice(0, 1).toUpperCase();
        const pokemonNameOtherLetters = data.name.slice(1);
        const formattedPokemonName =
          pokemonNameFirstLetter + pokemonNameOtherLetters;
        // console.log(formattedPokemonName);
        document.querySelector("#pokemonContainer").innerHTML += `
        <div class="pokemon ${data.types[0].type.name}">
            <div class="imgContainer">
                <img src="${data.sprites.front_default}" />
                </div>
                <div class="info">
                <h3 class="name">${formattedPokemonName}</h3>
                <span class="type">Type: <span>${data.types[0].type.name}</span></span>
            </div>
        </div>
        `;
      });
  }
}
pokemonList();

//NEXT BUTTON
document.querySelector("#next").addEventListener("click", function () {
  console.log("click detecteds");
  offset += 15;
  pokemonsNumber += 15;
  console.log(pokemonsNumber);
  pokemonList();
});
