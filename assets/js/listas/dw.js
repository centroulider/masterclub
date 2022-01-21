                     

fetch('../assets/data/datacursos.json')
.then(response => response.json() )
.then(data => {
    let tr = "";    
    data.dw.forEach(function(curso){
        tr += `            
               <tr>
                  <td ><a class=" text-xs text-light" href="${curso.url}"><i class="fab fa-telegram-plane text-success me-2"></i> ${curso.curso}</td>
                  <td class=" text-xs">${curso.tag}</td>
                  <td class="text-xs text-center"><a class="  text-success text-bolder" href="${curso.urlPago}">$ ${curso.precio}</a></td> 
               </tr>
        `;
    });
    document.getElementById('lista-dw').innerHTML = tr;
   
});