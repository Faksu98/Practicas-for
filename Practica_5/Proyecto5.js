var cantidadOpciones = "por def";


function ampliar(){
    cantidadOpciones = document.querySelector("#cantidad_ingresada").value; 
    document.querySelector("#cantidad_seleccionada").innerHTML=`
    <option>Seleccione...</option>
    `;
    for (let i = 1; i <= cantidadOpciones; i++){
        document.querySelector("#cantidad_seleccionada").innerHTML+=`
         <option>Opcion: ${i}</option>
         `;
    }
}