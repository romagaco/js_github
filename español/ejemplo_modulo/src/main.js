import  {Miconstante, pruebaVariable2, pruebaFuncion } from './pruebasmodulos.js';


console.log(Miconstante);
// console.log(pruebaVariable1);  de querer usar esta variable tendriamos un error
// ya que esta no fue exportada desde el modulo de pruebasmodulos.js
console.log(pruebaVariable2);

pruebaFuncion(); // exportacion de funciones

// importamos el obejeto y asi podremos acceder a las variables y funciones que deseamos

import paraExportar from './pruebasmodulos.js';

paraExportar.Miconstante2;
console.log(paraExportar.Miconstante2);



