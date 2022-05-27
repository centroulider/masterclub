var urlPage = window.location.search;
const urlParams = new URLSearchParams(urlPage);
const cat = urlParams.get('categoria');


fetch('../assets/data/superPack.json')
.then(response => response.json() )
.then(data => {
    const newArray = data.filter(filtra =>{
        return filtra.codigo == cat;
})
    

    const {codigo, curso, lenguaje, main, nivel, Plataforma, Profesor, duracion, categoria} = newArray[0];

        const nombreCurso = curso;
        const nombreLenguaje = lenguaje;
        const tema = main;
        const nivelCurso = nivel;
        const plataforma = Plataforma;
        const profesor = Profesor;
        const duracionCurso = duracion;
        const nombreCategoria = categoria;
        const codigoCategoria = codigo;

    document.getElementById('categoryName').innerHTML = nombreCategoria;
    

    const numCursos = data.length;
    document.getElementById('numCursos').innerHTML = numCursos;
    
    
    class horas extends Array {
    sum(key){
          return this.reduce((a, b) => a + (b[key] || 0), 0);
        }
      }

    const totalDuracion = new horas(...data);
    const totalHoras= totalDuracion.sum('duracion');

     document.getElementById('total_horas').innerHTML = totalHoras;


});


fetch('../assets/data/superPack.json')
.then(response => response.json() )
.then(datas => {
    const newArray = datas.filter(filtro =>{
        return filtro.codigo === cat;
})
    let div = "";    
    newArray.forEach(function(curso){
        div += `            
        <div class="p-1 col-12 col-lg-3 p-0 tarjeta">
            <div class="rounded text-center bg-bluedark">
                <div class="bg-gradient-primary  pb-1  mb-2">
                <div class="w-100 p-2">
                    <a href="https://wa.me/573132047407+*${curso.curso}*+de+${curso.Profesor}"><img src="../assets/img/cursos/${curso.codigo}/${curso.curso}.avif" class="shadow-sm" width="100%" alt="${curso.curso}" title="${curso.curso}"></a>
                </div>
                </div>
                <div class="px-3">
                <div class="div ">
                
                <img class=" shadow rounded-2" src="/assets/img/icons/${curso.main}.png" alt="${curso.main}" title="${curso.main}">
                <a class="text-light text-xxs" href="https://wa.me/+573242793938?text=Hola,%20Master.%20Quiero%20comprar%20el%20curso:%20+*${curso.curso}*+de+${curso.Profesor}"><h6 class="mb-0 text-light ">${curso.curso}</h6></a>
                <p class="text-xs text-light    ">Nivel: <span class="text-success">${curso.nivel} </span>- <span class="font-weight-bolder ">${curso.duracion} Hs</span></p>
                <p class="text-xs ">${curso.Profesor} <span class="font-weight-bolder text-success">${curso.Plataforma}</span></p>
                </div>
                <a href="https://wa.me/+573242793938?text=Hola,%20Master.%20Quiero%20comprar%20el%20curso:%20+*${curso.curso}*+de+${curso.Profesor}"><button class="w-100 bg-success mb-3 border-0 rounded text-bolder text-white move-on-hover">Comprar - USD 9.99</button></a>
                </div>
            </div>
        </div>
        `;
    });
    document.getElementById('lista-cursos').innerHTML = div;


 });

const d = document;

function searchFilters(input, selector) {
    d.addEventListener("keyup", e => {
        if (e.target.matches(input)){
              
            d.querySelectorAll(selector).forEach(el => (el.textContent.toLowerCase().includes(e.target.value))?el.classList.remove("filtro"):el.classList.add("filtro"));
        }
    }) 
}

searchFilters(".filtro-tarjetas", ".tarjeta");
