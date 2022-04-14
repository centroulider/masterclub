// cargaInfo();




fetch('./assets/data/superPack.json')
.then(response => response.json() )
.then(data => {
    let li = "";   
      data.forEach(function(curso){
        li += `
        <small><li class="d-flex justify-content-between"><a href="https://api.whatsapp.com/send/?phone=%2B573242793938&text=Hola%2C+Master.+Quiero+la+Promo+del+Super+Pack+de+Desarrollo+Web+por+37.000" class="w-50 border-bottom py-1">${curso.curso}</a> <span class="rounded px-1 w-50 text-center border-bottom"><small>${curso.lenguaje}</small></span></li></small>
        `;
      });
    document.getElementById('listaTodos').innerHTML = li;
   
});




