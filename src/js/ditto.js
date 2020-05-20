import {pokemonTemplate} from "./pokemon-template";

export class ditto {

    static async getData(root) {
        let data = await (await fetch('https://pokeapi.co/api/v2/pokemon/ditto/')).json();

        root.innerHTML = pokemonTemplate.getTemplate(data);
    }
}
