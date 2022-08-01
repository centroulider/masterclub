// Define la fecha límite
const finPromo = "jul 5 2022 23:59:59"

const countDownDate = new Date(finPromo).getTime();

// Actualiza la cuenta cada segundo
const x = setInterval(function() {
  const now = new Date().getTime(); // Obtiene la fecha y la hora actual
  const distance = countDownDate - now;// La diferencia entre la fecha límite y la fecha actual
  // Cálculos de tiempo para días, horas, minutos y segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  // Muestra el resultado en los elementos con id definido
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  // Mensaje cuando la cuenta termina
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "OFERTA NO DISPONIBLE";
  }

  if (distance < 0) {
    document.getElementById("promocionSuperpack").classList.add("d-none");
    document.getElementById("bonoGratisIngles").classList.add("d-none");
  }
}, 500);



window.onload=()=> {
  
   // Links footer

  // const linkmasterclub = document.getElementById("linkMasterClub");
  // linkmasterclub.href = "https://google.com";

  // const linkpagos = document.getElementById("linkPagos");
  // linkpagos.href = "https://google.com";

  // const linkgarantia = document.getElementById("linkGarantia");
  // linkgarantia.href = "https://google.com";

  // const linkprivacidad = document.getElementById("linkPrivacidad");
  // linkprivacidad.href = "https://google.com";

  // links ctas

  // const linkpdf = document.getElementById("linkPdf");
  // linkpdf.href = "https://masterclub30.digital/lista-todos"

  // const linkprueba = document.getElementById("linkPrueba");
  // linkprueba.href = "https://masterclub30.digital/prueba-gratis"

  // const linkpreciocategoria = document.getElementById("linkPrecioCategoria");
  // linkpreciocategoria.href = "https://wa.me/+573242793938?text=Hola+master+club.+Quiero+comprar+el+acceso+a+la+categoría+de:"

  // const linkoferta = document.getElementById("linkOferta");
  // linkoferta.href = "https://masterclub30.digital/superpack";


  // Lnks Menu

  // const linkMarketing = document.getElementById("linkMd");
  // linkMarketing.href = "/categorias.html?categoria=md"

  // const linkVideo = document.getElementById("linkEv");
  // linkVideo.href = "/categorias.html?categoria=ev"

  // const linkDiseno = document.getElementById("linkDg");
  // linkDiseno.href = "/categorias.html?categoria=dg"

  // const linkIngles = document.getElementById("linkIn");
  // linkIngles.href = "/categorias.html?categoria=in" 

  // const linkDw = document.getElementById("linkDw");
  // linkDw.href = "/categorias.html?categoria=dw"

  // const linkinicio = document.getElementById("linkInicio");
  // linkinicio.href = "https://masterclub30.digital"

  // const linkhome = document.getElementById("linkHome");
  // linkhome.href = "https://masterclub30.digital"
};





