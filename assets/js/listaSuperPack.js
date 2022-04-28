// cargaInfo();




fetch('./assets/data/superPack.json')
.then(response => response.json() )
.then(data => {
    let li = "";   
      data.forEach(function(curso){
        li += `
        <small><li class="d-flex justify-content-between">
          <div class="w-70 border-bottom py-1 d-flex">
            <div><img class=" shadow rounded-2" src="/assets/img/icons/${curso.main}.png" alt="${curso.main}" title="${curso.main}"></div>
            <div class="ms-2"><a href="https://api.whatsapp.com/send/?phone=%2B573242793938&text=Hola%2C+Master.+Quiero+la+Promo+del+Super+Pack+de+Desarrollo+Web+por+37.000" >${curso.curso}</a></div>
          </div>
          <span class="rounded px-1 w-30 text-left border-bottom"><small>${curso.lenguaje}</small></span>
          
          <span class="rounded px-1 w-30 text-center border-bottom"><small>${curso.nivel}</small></span>
          
        </li></small>
        `;
      });
    document.getElementById('listaTodos').innerHTML = li;
    
    const numCursos = data.length;
    document.getElementById('numCursos').innerHTML = numCursos;
});




