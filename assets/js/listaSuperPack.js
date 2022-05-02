// cargaInfo();




fetch('./assets/data/superPack.json')
.then(response => response.json() )
.then(data => {
    let li = "";   
      data.forEach(function(curso){
        li += `
        <small class="tarjeta">
        <li class="d-flex justify-content-between " ${curso.Plataforma} ${curso.Profesor}>
          <div class="w-70 border-bottom py-1 d-flex">
            <div><img class=" shadow rounded-2" src="/assets/img/icons/${curso.main}.png" alt="${curso.main}" title="${curso.main}"></div>
            <div class="ms-2"><a href="https://api.whatsapp.com/send/?phone=%2B573242793938&text=Hola%2C+Master.+Quiero+la+Promo+del+Super+Pack+de+Desarrollo+Web+por+37.000" >${curso.curso}</a></div>
          </div>
          <span class="rounded px-1 w-30 text-left border-bottom"><small>${curso.lenguaje}<span class="opacity-0 miniText"> ${curso.Plataforma}</span></small></span>
          
          <span class="rounded px-1 w-30 text-center border-bottom"><small>${curso.nivel}</small></span>
          <span class="rounded px-1 w-30 text-center border-bottom"><small>${curso.duracion} Hs<span class="opacity-2 miniText"> ${curso.Profesor}</span></small><span></span></span>
        </li>
        </small>
        `;
      });
    document.getElementById('listaTodos').innerHTML = li;
    
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



// Filtro de cursos

const d = document;

function searchFilters(input, selector) {
    d.addEventListener("keyup", e => {
        if (e.target.matches(input)){
              
            d.querySelectorAll(selector).forEach(el => (el.textContent.toLowerCase().includes(e.target.value))?el.classList.remove("filtro"):el.classList.add("filtro"));
        }
    }) 
}

searchFilters(".filtro-tarjetas", ".tarjeta");




