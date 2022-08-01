const autor = 'Gio Moreno';
const siteName = 'Master Club 3.0';
const pageName = 'Cursos';
const companyName = 'Master Club 3.0'

var urlPage = window.location.search;
const urlParams = new URLSearchParams(urlPage);
const cat = urlParams.get('idCurso');


fetch('../assets/data/superPack.json')
.then(response => response.json() )
.then(data => {
    const newArray = data.filter(filtra =>{
        return filtra.idCurso == cat;
})
    

    const {idCurso, codigo, curso, descripcion, lenguaje, main, nivel, Plataforma, Profesor, duracion, categoria, precio, precioRegular} = newArray[0];

        const codigoCurso = codigo;
        const nombreCurso = curso;
        const descCurso = descripcion; 
        const nombreLenguaje = lenguaje;
        const tema = main;
        const nivelCurso = nivel;
        const plataforma = Plataforma;
        const profesor = Profesor;
        const duracionCurso = duracion;
        const nombreCategoria = categoria;
        const precioCurso = precio;
        const precio_regular = precioRegular

    document.getElementById('categoria').innerHTML = nombreCategoria;
    document.getElementById('lenguaje').innerHTML = nombreLenguaje;
    document.getElementById('nombreCurso').innerHTML = nombreCurso;
    document.getElementById('descripcionCurso').innerHTML = descCurso;
    document.getElementById('profesor').innerHTML = profesor;
    document.getElementById('nombreCurso2').innerHTML = nombreCurso;
    document.getElementById('nivel').innerHTML = nivelCurso;
    document.getElementById('duracion').innerHTML = duracionCurso;
    document.getElementById('plataforma').innerHTML = plataforma;
    document.getElementById('duracionCurso').innerHTML = duracionCurso;
    document.getElementById('pago').innerHTML = precioCurso ;
    document.getElementById('pagoRegular').innerHTML = precio_regular ;
    
    const btnVolverCategoria = document.createElement('a');
    btnVolverCategoria.href = '/categorias.html?categoria='+codigo
    btnVolverCategoria.classList = 'bg-warning px-3 py-1 rounded d-inline  text-bolder';
    btnVolverCategoria.textContent = "Todos los cursos";
    document.querySelector('.volverCategoria').appendChild(btnVolverCategoria);

    const imgCurso = document.createElement('img');
    imgCurso.src = './assets/img/categorias/'+codigoCurso+'/'+idCurso+'.avif' 
    imgCurso.alt = nombreCurso+ ' de ' + profesor
    imgCurso.title = nombreCurso+ ' de ' + profesor
    imgCurso.style = 'width:100%;'
    document.querySelector('.imagenCurso').appendChild(imgCurso);

    const checkout = document.createElement('a');
    checkout.href = 'checkout.html?idCurso='+idCurso+'&Curso='+nombreCurso+'&precio='+precio
    checkout.classList = 'bg-bluedark rounded d-block text-success text-center p-2 text-bolder mb-2';
    checkout.textContent = "Comprar";
    document.querySelector('.checkoutLink').appendChild(checkout);

    const btnDudas = document.createElement('a');
    btnDudas.href = 'https://api.whatsapp.com/send/?phone=%2B573242793938&text=Hola%2C+Master.+Me+interesa+el+curso+'+nombreCurso+'+de+'+profesor+'+pero+tengo+una+duda'
    btnDudas.classList = 'bg-success rounded d-block text-white text-center p-2 my-2 text-bolder';
    btnDudas.textContent = "¿Dudas?";
    document.querySelector('.dudas').appendChild(btnDudas);
    

    // Inserta los datos en el head

    $('head').append( '<meta charset="UTF-8">' );
    $('head').append( '<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">' );
    $('head').append( '<title>'+nombreCurso+'</title>' );
    $('head').append( '<meta property="type" content="website" />' );
    $('head').append( '<meta property="url" content="'+siteName+'/curso?idCurso='+idCurso+'" />' );
    $('head').append( '<meta name="author" content="'+autor+'">' );
    $('head').append( '<meta name="keywords" content="cursos baratos,'+nombreCurso+", "+nombreCategoria+", "+profesor+" "+plataforma+'" />' );
    $('head').append( '<meta name="dcterms.rightsHolder" content="'+companyName+'" />' );
    $('head').append( '<meta property="og:title" content="'+nombreCurso+'" />' );
    $('head').append( '<meta property="og:Author" content="'+autor+'" />' );
    $('head').append( '<meta property="og:type" content="website" />' );
    $('head').append( '<meta property="og:url" content="'+siteName+'/curso/'+nombreCurso+'" />' );
    $('head').append( '<meta property="og:image" content="./assets/img/categorias/'+codigoCurso+'/'+idCurso+'.avif" />' );
    $('head').append( '<meta name="description" content="'+descCurso+'">' ); 
    $('head').append( '<meta property="og:description" content="'+descCurso+'" />' ); 



});



