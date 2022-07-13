// cargaInfo();

fetch('./assets/data/categorias.json')
.then(response => response.json() )
.then(data => {
    let div = "";    
    data.forEach(function(curso){
        div += `
        <div id="cardCategory" class=" col-lg-3 mb-lg-0">
          <div class="bg-white shadow-sm rounded z-index-2 mb-3">           
             <div class="card-body p-0 pb-0 ">
                <div class=" bg-gradient-primary  pb-2 mb-2">
                  <div class="w-100 ">
                    <a href="/categorias.html?categoria=${curso.Codigo}"><img src="${curso.imageUrl}" class=" " width="100%" alt=""></a>
                  </div>
                </div>
                <div class="mx-3 text-center">
                  <a href="/categorias.html?categoria=${curso.Codigo}"><h5 class="ms-2 mb-0  text-dark text-bolder"> ${curso.categoria} </h5></a>
                  <p class="text-sm ms-2">${curso.tags}</p>
                </div>
                <div class="mx-3">
                  <a href="/categorias.html?categoria=${curso.Codigo}"><button class="w-100 bg-success mb-3 border-0 rounded text-bolder text-white move-on-hover">Ver los ${curso.Cantidad} cursos</button></a>
                </div>
             </div>
          </div>
        </div>
        `;
    });
    document.getElementById('categorias').innerHTML = div;
   
});








