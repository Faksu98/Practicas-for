var mostrarImagenes = "por def";

function mostrar(){
    mostrarImagenes = document.querySelector("#cantidad_imagenes").value;
    for (let i = 0; i <= mostrarImagenes; i++){
        document.querySelector("#resultado").innerHTML += `
        <img src='https://www.pngitem.com/pimgs/m/653-6531476_chibi-solaire-praise-the-sun-hd-png-download.png' alt='Praise the sun'>")
        `;
    }
}