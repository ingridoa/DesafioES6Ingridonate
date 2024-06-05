"use strict";

var _cliente = require("./Dominio/cliente.js");
var _impuesto = require("./Dominio/impuesto.js");
//crear importación

var imp1 = new _impuesto.Impuesto(1100, 100);
var cli1 = new _cliente.Cliente("Ingrid", imp1);