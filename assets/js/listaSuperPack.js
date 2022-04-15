// cargaInfo();




fetch('./assets/data/superPack.json')
.then(response => response.json() )
.then(data => {
    let li = "";   
      data.forEach(function(curso){
        li += `
        <small><li class="d-flex justify-content-between">
        
          <a href="https://api.whatsapp.com/send/?phone=%2B573242793938&text=Hola%2C+Master.+Quiero+la+Promo+del+Super+Pack+de+Desarrollo+Web+por+37.000" class="w-70 border-bottom py-1"><span class="rounded px-1  text-center "><img class=" shadow rounded-2" src="/assets/img/icons/${curso.main}.png" alt="${curso.main}" title="${curso.main}"</span>  &nbsp;&nbsp; ${curso.curso}</a>
          <span class="rounded px-1 w-30 text-left border-bottom"><small>${curso.lenguaje}</small></span>
          
        </li></small>
        `;
      });
    document.getElementById('listaTodos').innerHTML = li;
   
});




