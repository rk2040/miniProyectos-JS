
                        //'DOMContentLoaded' Espera que responda la API (y agrego un loader)
document.addEventListener('DOMContentLoaded', ()=>{
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