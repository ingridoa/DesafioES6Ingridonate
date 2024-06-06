//crear importación

import { Cliente } from "./Dominio/cliente.js";
import { Impuesto } from "./Dominio/impuesto.js";


const imp1 = new Impuesto(1100, 100);
const cli1 = new Cliente("Ingrid", imp1);

 console.log(`nombre del cliente: ${cli1.nombrecliente} y el impuesto es: ${cli1.calcularImpuesto()}`)