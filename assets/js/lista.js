// cargaInfo();

const linkhome = document.getElementById("linkHome");
linkhome.href = "https://masterclub30.digital";


fetch('./assets/data/datacursos.json')
.then(response => response.json() )
.then(data => {
    let li = "";    
      
      data.ar.forEach(function(curso){
          li += `
          <li><a href="${curso.urlPago}" class=" p-1">${curso.curso} - <span class="text-bolder">${curso.categoria}</span></a></li>
          `;
      });

      data.idm.forEach(function(curso){
        li += `
        <li><a href="${curso.urlPago}" class=" p-1">${curso.curso} - <span class="text-bolder">${curso.categoria}</span></a></li>
        `;
      });

      data.ins.forEach(function(curso){
        li += `
        <li><a href="${curso.urlPago}" class=" p-1">${curso.curso} - <span class="text-bolder">${curso.categoria}</span></a></li>
        `;
      });

      data.em.forEach(function(curso){
        li += `
        <li><a href="${curso.urlPago}" class=" p-1">${curso.curso} - <span class="text-bolder">${curso.categoria}</span></a></li>
        `;
      });
      data.ev.forEach(function(curso){
        li += `
        <li><a href="${curso.urlPago}" class=" p-1">${curso.curso} - <span class="text-bolder">${curso.categoria}</span></a></li>
        `;
      });
      data.dg.forEach(function(curso){
        li += `
        <li><a href="${curso.urlPago}" class=" p-1">${curso.curso} - <span class="text-bolder">${curso.categoria}</span></a></li>
        `;
      });
      data.ecm.forEach(function(curso){
        li += `
        <li><a href="${curso.urlPago}" class=" p-1">${curso.curso} - <span class="text-bolder">${curso.categoria}</span></a></li>
        `;
      });
      data.df.forEach(function(curso){
        li += `
        <li><a href="${curso.urlPago}" class=" p-1">${curso.curso} - <span class="text-bolder">${curso.categoria}</span></a></li>
        `;
      });
      data.dp.forEach(function(curso){
        li += `
        <li><a href="${curso.urlPago}" class=" p-1">${curso.curso} - <span class="text-bolder">${curso.categoria}</span></a></li>
        `;
      });
      data.cp.forEach(function(curso){
        li += `
        <li><a href="${curso.urlPago}" class=" p-1">${curso.curso} - <span class="text-bolder">${curso.categoria}</span></a></li>
        `;
      });
      data.dw.forEach(function(curso){
        li += `
        <li><a href="${curso.urlPago}" class=" p-1">${curso.curso} - <span class="text-bolder">${curso.categoria}</span></a></li>
        `;
      });
      data.md.forEach(function(curso){
        li += `
        <li><a href="${curso.urlPago}" class=" p-1">${curso.curso} - <span class="text-bolder">${curso.categoria}</span></a></li>
        `;
      });
      data.nf.forEach(function(curso){
        li += `
        <li><a href="${curso.urlPago}" class=" p-1">${curso.curso} - <span class="text-bolder">${curso.categoria}</span></a></li>
        `;
      });
      data.ot.forEach(function(curso){
        li += `
        <li><a href="${curso.urlPago}" class=" p-1">${curso.curso} - <span class="text-bolder">${curso.categoria}</span></a></li>
        `;
      });
    document.getElementById('listaTodos').innerHTML = li;
   
});





{/* <div class="col-9 col-lg-3 mb-lg-0 me-3">
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
</div> */}


