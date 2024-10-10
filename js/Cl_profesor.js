export default class Cl_profesor {
    constructor(nombre, bono){
        this.bono = bono
        this.nombre = nombre
    }
set bono(b){
    this._bono = b;}
get bono(){
    return this._bono;}
    
set nombre(n){
    this._nombre = n;}
get nombre(){
    return this._nombre;}
}