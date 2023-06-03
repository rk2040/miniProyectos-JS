
                        //'DOMContentLoaded' Espera que responda la API (y agrego un loader)
document.addEventListener('DOMContentLoaded', ()=>{

    const fetchPokemons = async (endpoint)=>{
        let data;

        try{
            const response = await fetch(endpoint, {
                method:'Get', 
                headers:{
                    'content-Type':'application/json'
                }
            })
            data = await response.json();
        }
        catch(error){console.log(error)}

        return data.pokemon_species;
    };

    function orderNumber(str){  //Obtengo el numero de pokemon Ej. pikachu: 25
        let mySubtring = str.substring( str.lastIndexOf('s/') + 2, str.lastIndexOf('/') )

        return mySubtring;
    }

    async function getPokemons(numero){
        let endpoint = `https://pokeapi.co/api/v2/generation/${numero}/`

        let container = document.getElementById('container');
        container.innerHTML = '';

        let pokemons = [];
        pokemons = await fetchPokemons(endpoint);
        for(let i=0; i<pokemons.length; i++){
            pokemons[i].num = orderNumber(pokemons[i].url)
        }

        pokemons.sort( (a,b)=> a.num - b.num)
        //console.log(pokemons);
        pokemons.forEach((item) => {
            let divItem = document.createElement('li');
            divItem.classList.add('item');
            divItem.innerHTML = `<div> ${orderNumber(item.url)} - ${item.name} </div>`;
            container.appendChild(divItem);
        });

    }
    getPokemons(1)

    let generacion = [
        "generation-1",
        "generation-2",
        "generation-3",
        "generation-4",
        "generation-5",
        "generation-6",
        "generation-7"
    ];


    let filters = document.getElementById('filters');
    let gen = '';
    for(let i=0; i<generacion.length; i++){
        gen += `<input type="radio" id=${generacion[i]} value=${i+1} class="radio-gens" name="generation" checked>
        <label for=${generacion[i]} class="label-gens">${generacion[i]}</label>`
    }
    filters.innerHTML = gen;
});