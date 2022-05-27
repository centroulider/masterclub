const precioSuperPack = 14.99

var urlPage = window.location.search;
const urlParams = new URLSearchParams(urlPage);
const paramCountry = urlParams.get('pais');

fetch('../assets/data/divisas.json')
.then(response => response.json() )
.then(data => {
    const newArray = data.filter(filtra =>{
        return filtra.codigoPais == paramCountry;
})
    

    const {pais, codigoPais, current, moneda} = newArray[0];

        const nombrePais = pais;
        const codeCountry = codigoPais;
        const oneDolar = current;
        const tipoMoneda = moneda;

    const valorHoy1 = precioSuperPack * oneDolar
    const valorHoy = valorHoy1.toFixed(2)

    document.getElementById('valor_hoy').innerHTML = valorHoy;
    document.getElementById('moneda').innerHTML = tipoMoneda;
    document.getElementById('nombre_pais').innerHTML = nombrePais;

    document.getElementById('valor_hoy2').innerHTML = valorHoy;
    document.getElementById('moneda2').innerHTML = tipoMoneda;
    document.getElementById('nombre_pais2').innerHTML = nombrePais;
    
    const imageFlag = document.createElement('img');
    imageFlag.src = '../assets/img/paises/'+ codeCountry + '.svg'
    imageFlag.classList = "w-100"
    document.getElementById('flag').appendChild(imageFlag);

    const imageFlag2 = document.createElement('img');
    imageFlag2.src = '../assets/img/paises/'+ codeCountry + '.svg'
    imageFlag2.classList = "w-10"
    document.getElementById('flag2').appendChild(imageFlag2);



    const directoPago = new DirectoPago('qiUKDIrsgaLlhhJbYFlHXqqepziuSxpL');

    const params = {
        currency: 'USD',
        country: paramCountry,
        amount: precioSuperPack,
        text: moneda + " " + valorHoy
    };

    directoPago.createCheckout('id-button', params);


});




