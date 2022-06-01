var saludarIngresado = "por def";

function mostrar(){
    saludarIngresado = document.querySelector("#saludar_ingresado").value;
    for (let i = 0; i <= saludarIngresado; i++ ){
        document.querySelector("#resultado").innerHTML += `
        <h1> Buenos días tardes noches </h1>
        `;
    }
}