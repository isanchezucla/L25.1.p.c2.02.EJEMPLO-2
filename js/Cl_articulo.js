export default class Cl_articulo {
    constructor(nombre, costo) {
        this.nombre = nombre;
        this.costo = costo;
    }
porcDescuento(){
    return 0;
}
porcGanancia(){
    return 20;
}
ganancia(){
    return this.costo * (this.porcGanancia() / 100);
}
descuento(){
    return this.costo * (this.porcDescuento() / 100);
}
precio(){
    return this.costo + (this.ganancia() - this.descuento());
}  
}