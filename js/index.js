/* 
Una tienda planea incrementar el 20% del costo para establecer el precio de venta de sus
artículos (1=ropa, 2=víveres), conociendo su nombre y costo. Para la ropa de color rojo
(1=blanco, 2=azul, 3=rojo) otorgará un 10% de descuento. Los víveres no tienen
descuento, pero si es un producto básico, sólo aplicará un 5% del costo para la ganancia.
*/
import Cl_ropa from "./Cl_ropa.js";
import Cl_viveres from "./Cl_viveres.js";


    let viveres1 = new Cl_viveres("leche", 10, 1);
    let ropa1 = new Cl_ropa("camisa", 20, 2);
    let ropa2 = new Cl_ropa("short", 20, 3);
    let viveres2 = new Cl_viveres("toddy", 30, 2);
    let ropa3 = new Cl_ropa("blusa", 40, 3);
    
    console.log(`Nombre: ${viveres1.nombre}, Costo: $${viveres1.costo}, Porcentaje de ganancia: ${viveres1.porcGanancia()}, Porcentaje de descuento: ${viveres1.porcDescuento()}, Precio: $${viveres1.precio()}`)
    console.log(`Nombre: ${ropa1.nombre}, Costo: $${ropa1.costo}, Porcentaje de ganancia: ${ropa1.porcGanancia()}, Porcentaje de descuento: ${ropa1.porcDescuento()}, Precio: $${ropa1.precio()}`)
    console.log(`Nombre: ${ropa2.nombre}, Costo: $${ropa2.costo}, Porcentaje de ganancia: ${ropa2.porcGanancia()}, Porcentaje de descuento: ${ropa2.porcDescuento()}, Precio: $${ropa2.precio()}`)
    console.log(`Nombre: ${viveres2.nombre}, Costo: $${viveres2.costo}, Porcentaje de ganancia: ${viveres2.porcGanancia()},  Porcentaje de descuento: ${viveres2.porcDescuento()}, Precio: $${viveres2.precio()}`)
    console.log(`Nombre: ${ropa3.nombre}, Costo: $${ropa3.costo}, Porcentaje de ganancia: ${ropa3.porcGanancia()},  Porcentaje de descuento: ${ropa3.porcDescuento()}, Precio: $${ropa3.precio()}`)