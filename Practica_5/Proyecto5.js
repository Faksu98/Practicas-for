var cantidadOpciones = "por def";

function ampliar(){
    cantidadOpciones = document.querySelector("#cantidad_ingresada").value;
    for (let i = 1; i <= cantidadOpciones; i++){
        document.querySelector("#cantidad_seleccionar").innerHTML+=`
         <div> Opcion: ${i} </div>`;
    }
}