
                        //'DOMContentLoaded' Espera que responda la API (y agrego un loader)
document.addEventListener('DOMContentLoaded', ()=>{

    //#region OBSERVADOR DE IMAGENES TASK
    const imgOptions = {};
    const imgObserver = new IntersectionObserver( (entries, imgObserver)=>{
        entries.forEach( (entry)=>{
            if(!entry.isIntersecting) return;

            const img = entry.target;
            let dataImage = img.getAttribute('dataImage');
            img.src = dataImage;
            imgObserver.unobserve(img)
        })
    }, imgOptions)
    //#endregion

    //#region CONSUMO DE API CON FETCH
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
    //#endregion 

    //#region  ORDENAR NUMEROS DE POKEMON
    function orderNumber(str){  //Obtengo el numero de pokemon Ej. pikachu: 25
        let mySubtring = str.substring( str.lastIndexOf('s/') + 2, str.lastIndexOf('/') )

        return mySubtring;
    }
    //#endregion

    //#region Agregando Pokemons a html
    async function getPokemons(numero, toggle){
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
            let numeroTresDecimales = orderNumber(item.url);
            if(numeroTresDecimales < 10){
                numeroTresDecimales = '0' + numeroTresDecimales;
            }
            if(numeroTresDecimales < 100){
                numeroTresDecimales = '0' + numeroTresDecimales;
            }

            let divItem = document.createElement('li');
            divItem.classList.add('item');

            let img = new Image()
            const toggleUrl = toggle ? "https://assets.pokemon.com/assets/cms2/img/pokedex/full/" : 'https://www.serebii.net/pokemongo/pokemon/';
            img.src = 'https://i.ibb.co/QdzPZqT/Pokeball06.webp'
            const urlImage = `${toggleUrl}${numeroTresDecimales}.png`;
            img.setAttribute('dataImage', urlImage);
            img.setAttribute('class', 'pokeImage');
            img.setAttribute('alt', item.name);


            divItem.innerHTML = `<div> ${orderNumber(item.url)} - ${item.name} </div>`;
            divItem.appendChild(img);
            container.appendChild(divItem);
            imgObserver.observe(img);
        });

    }
    //#endregion

    //#region Agregando Generaciones de Pokemons
    let numero = 1;
    getPokemons(numero)
    let toggle = false;
    btnIcono.addEventListener('click', ()=>{
        toggle = !toggle;
        getPokemons(numero, toggle);
    })

    let generacion = [
        "generation-1",
        "generation-2",
        "generation-3",
        "generation-4",
        "generation-5",
        "generation-6",
        "generation-7",
        "generation-8",
        "generation-9"
    ];


    let filters = document.getElementById('filters');
    let gen = '';
    for(let i=0; i<generacion.length; i++){
        gen += `<input type="radio" id=${generacion[i]} value=${i+1} class="radio-gens" name="generation" checked>
        <label for=${generacion[i]} class="label-gens">${generacion[i]}</label>`
    }
    filters.innerHTML = gen;
    filters.addEventListener('click', (e)=>{
        let targ = e.target.type;
        if(targ == 'radio'){
            getPokemons(e.target.value, toggle);
            title.innerHTML = 'Pokemon ' + e.target.id;
        }
    })
    //#endregion

//    getPokemons(1)


});