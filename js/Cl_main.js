import Cl_profesor from "./Cl_profesor.js";
import Cl_fijo from "./Cl_fijo.js";
import Cl_contratado from "./Cl_contratado.js";

export default class Cl_main {

    constructor() {

 let profesor = new Cl_profesor("Carlos", 25);
 let p1 = new Cl_fijo("Carlos",25, 100);

let salida = document.getElementById("salida");
salida.innerHTML = `Nombre del profesor fijo: ${profesor.nombre} <br> 
Monto del bono: $${profesor.bono} <br> 
Monto del sueldo: $${p1.sueldo} <br> 
Ingreso total del profesor ${profesor.nombre}: $${p1.ingresoFijo()}`;}
}