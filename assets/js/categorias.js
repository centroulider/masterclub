// cargaInfo();

fetch('./assets/data/categorias.json')
.then(response => response.json() )
.then(data => {
    let div = "";    
    data.forEach(function(curso){
        div += `
        <div id="cardCategory" class="col-9 col-lg-3 mb-lg-0">
          <div class="card z-index-2 mb-3">           
             <div class="card-body p-0 pb-0 ">
                <div class=" bg-gradient-primary  pb-2 mb-2">
                  <div class="w-100 ">
                    <a href="${curso.url}"><img src="${curso.imageUrl}" class=" shadow-sm" width="100%" alt=""></a>
                  </div>
                </div>
                <div class="mx-3">
                  <a href="${curso.url}"><h6 class="ms-2 mb-0  text-light text-bolder"> ${curso.Categoría} </h6></a>
                  <p class="text-sm ms-2">${curso.tags}</p>
                </div>
                <div class="mx-3">
                  <a href="${curso.url}"><button class="w-100 bg-success mb-3 border-0 rounded text-bolder text-white move-on-hover">Ver los ${curso.Cantidad} cursos</button></a>
                </div>
             </div>
          </div>
        </div>
        `;
    });
    document.getElementById('categorias').innerHTML = div;
   
});


fetch('./assets/data/autores.json')
.then(response => response.json() )
.then(data => {
    let tr = "";    
    data.forEach(function(autor){
        tr += `            
          <div class="col-lg-2 px-2 py-1 text-center">
                      <div>
                        <a href="#"><img src="${autor.urlImage}" class="w-100 h-auto avatar me-3 mb-2" alt="${autor.autor}"></a>
                      </div>
                      <div class="d-flex flex-column justify-content-center">
                        <a href="#"><h6 class="mb-0 text-sm text-white">${autor.autor}</h6></a>
                        <p class="text-xs text-secondary mb-0">${autor.tags}</p>
                      </div>
                      <p class="text-xs font-weight-bold mb-0 text-success">${autor.cantidad} Cursos</p>
              </div>
        `;
    });
    document.getElementById('autores').innerHTML = tr;
   
});






