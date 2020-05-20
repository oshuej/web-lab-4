export class pokemonTemplate {
    static getTemplate(data) {
        let template = ''
        template += `<img width="200" height="200" src="${data.sprites.front_default}">`
        template += `<h3>${data.name}<h3/>`
        template += `
        <h5>Abilities</h5>
        <ul>
        `
        data.abilities.map(item => {
            template += `<li>${item.ability.name}</li>`
        })

        template += '</ul>'
        return template;
    }
}
