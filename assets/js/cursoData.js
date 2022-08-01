const autor = 'Gio Moreno';
const siteName = 'Master Club 3.0';
const pageName = 'Cursos';
const companyName = 'Master Club 3.0'

var urlPage = window.location.search;
const urlParam = new URLSearchParams(urlPage);
const categ = urlParam.get('idCurso');


fetch('../assets/data/superPack.json')
.then(response => response.json() )
.then(data => {
    const newArray = data.filter(filtra =>{
        return filtra.idCurso == categ;
})
    

    const {idCurso, codigo, curso, lenguaje, main, nivel, Plataforma, Profesor, duracion, categoria, precio} = newArray[0];

        const codigoCurso = codigo;
        const nombreCurso = curso;
        const nombreLenguaje = lenguaje;
        const tema = main;
        const nivelCurso = nivel;
        const plataforma = Plataforma;
        const profesor = Profesor;
        const duracionCurso = duracion;
        const nombreCategoria = categoria;
        const precioCurso = precio;

    document.getElementById('categoria').innerHTML = nombreCategoria;
    document.getElementById('lenguaje').innerHTML = nombreLenguaje;
    document.getElementById('nombreCurso').innerHTML = nombreCurso;
    document.getElementById('profesor').innerHTML = profesor;
    document.getElementById('nombreCurso2').innerHTML = nombreCurso;
    document.getElementById('nivel').innerHTML = nivelCurso;
    document.getElementById('duracion').innerHTML = duracionCurso;
    document.getElementById('plataforma').innerHTML = plataforma;
    document.getElementById('duracionCurso').innerHTML = duracionCurso;
    document.getElementById('pago').innerHTML = precioCurso ;
    
    const imgCurso = document.createElement('img');
    imgCurso.src = './assets/img/categorias/'+codigoCurso+'/'+idCurso+'.avif' 
    imgCurso.alt = nombreCurso+ ' de ' + profesor
    imgCurso.title = nombreCurso+ ' de ' + profesor
    imgCurso.style = 'width:100%; padding: 8px'
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
    $('head').append( '<meta name="description" content="'+desCurso+'">' ); 
    $('head').append( '<meta property="og:description" content="'+desCurso+'" />' ); 



});



