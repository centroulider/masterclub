                     

fetch('../assets/data/datacursos.json')
.then(response => response.json() )
.then(data => {
    let div = "";    
    data.md.forEach(function(curso){
        div += `            
        <div class="p-1 col-12 col-lg-4 p-0 my-2 tarjeta">
            <div class="rounded text-center bg-bluedark">
                <div class="bg-gradient-primary  pb-1  mb-2">
                <div class="w-100 ">
                    <a href="${curso.urlPago}" ><img src="${curso.urlImage}" class="shadow-sm" width="100%" alt=""></a>
                </div>
                </div>
                <div class="px-3">
                <div class="div ">
                <a class="text-light text-xxs" href="${curso.urlPago}"><h6 class="mb-0 text-light ">${curso.curso}</h6></a>
                <p class="text-xs mt-2">${curso.autor} <span class="font-weight-bolder text-success">${curso.tag}</span></p>
                </div>
                <a href="${curso.urlPago}"><button class="w-100 bg-success mb-3 border-0 rounded text-bolder text-white move-on-hover">Comprar por ${curso.precio}</button></a>
                </div>
            </div>
        </div>
        `;
    });
    document.getElementById('lista-md').innerHTML = div;
   
});
