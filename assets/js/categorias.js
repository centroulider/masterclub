// cargaInfo();

fetch('./assets/data/categorias.json')
.then(response => response.json() )
.then(data => {
    let div = "";    
    data.forEach(function(curso){
        div += `
        <div id="cardCategory" class="col-9 col-lg-3 mb-lg-0">
          <div class="card z-index-2 mb-3">
           
             <div class="card-body p-3 pb-0">
               <div class="bg-gradient-primary border-radius-lg p-1  mb-2">
                 <div class="w-100 ">
                   <a href="${curso.url}"><img src="${curso.imageUrl}" class="border-radius-lg shadow-sm" width="100%" alt=""></a>
                 </div>
               </div>
               <div class="div ">
                 <a href="${curso.url}"><h6 class="ms-2 mb-0 text-  text-light text-bolder"> ${curso.Categoría} </h6></a>
                 <p class="text-sm ms-2 mt-2"> <span class="font-weight-bolder text-success"></span>${curso.tags}</p>
               </div>
               <div class="container border-radius-lg mb-2">
                   <div class="row mt-3">
                     <div class="d-none d-lg-block col-5 ps-0">
                       <div class="d-flex mb-2">
                         <div class="icon icon-shape icon-xxs shadow border-radius-sm bg-gradient-primary text-center me-2 d-flex align-items-center justify-content-center">
                           <i class="fas fa-list-alt mt-2"></i> 
                         </div>
                         <a href="${curso.url}" class="text-sm font-weight-bold text-light">Lista</a>
                       </div>
                     </div>
                     <div class="col-12 col-lg-7 ps-0">
                       <div class="d-flex">
                         <p class="text-sm ms-lg-2"> <span class="font-weight-bolder text-success">${curso.Cantidad}</span> Cursos </p>
                       </div>
                     </div>
                   </div>
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






