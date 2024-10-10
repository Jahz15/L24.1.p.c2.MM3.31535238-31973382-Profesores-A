import Cl_profesor from "./Cl_profesor.js";

export default class Cl_fijo extends Cl_profesor {
    constructor(nombre, bono, sueldo) {
        super(nombre, bono, sueldo);
        this.sueldo = sueldo;
    }
set sueldo(s){
    this._sueldo = s;
}
get sueldo(){
    return this._sueldo;
}

ingresoFijo() { 
    return super.bono + this.sueldo;
}
}