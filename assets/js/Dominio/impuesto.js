export class Impuesto {
  // se debe declarar los atributos de la clase de impuestos
  #montoBrutoAnual;
  #deducciones;

  constructor(montoBrutoAnual, deducciones) {
    this.#montoBrutoAnual = montoBrutoAnual;
    this.#deducciones = deducciones;
  }
  //geters

  get montoBrutoAnual() {
    // devuelve el verdadero dato protegido
    return this.#montoBrutoAnual;
  }

  // seters

  set montoBrutoAnual(newValue) {
    this.#montoBrutoAnual = newValue;
  }
  get deducciones() {
    //devuelve el dato protegido
    return this.#deducciones;
  }
  //setters
  set deducciones(newValue) {
    this.#deducciones = newValue;
  }
}
