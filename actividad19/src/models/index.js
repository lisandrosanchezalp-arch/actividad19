import * as ctrl from "../src/controllrers/productos.controllers.js"
import * as model from "./src/models/producto.model.js"

console.log("------productos arrancar");
console.log(model.listar().map((p) => p.nombre));

console.log("--------creando uno nuevo--------");
const nombre = "Sincronizada" + Date.now();
const creado = ctrl.crearProducto({nombre, precio:32, categoria:"comida"});

//el controlador devuelve {ok:data} o {ok:false, error}
//hay que revisar siempre cual de los dos

if(creado.ok){
    console.log("creado:", creado.data.nombre);
}else{
    console.log("no se pudo crear:", creado.error.mensaje);
}


console.log("-----productos ahora");
console.log(model.listar().map((p) => p.nombre));
console.log("")
console.log("Abre src/data/productos.json y compruebalo");
console.log("Vuelve a ejecutar:el producto anterior sigue ahi");