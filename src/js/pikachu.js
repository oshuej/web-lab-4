import {pokemonTemplate} from "./pokemon-template";

export class pikachu {

    static async getData(root) {
        let data = await (await fetch('https://pokeapi.co/api/v2/pokemon/pikachu/')).json();

        root.innerHTML = pokemonTemplate.getTemplate(data);
    }
}
