// 1. declaro clase
class Cliente {
  // 2. declaración de atributos
  #nombrecliente;
  #impuesto;
  // ...

  // 3. Declaro constructor donde mapeo parametros a atributos
  constructor(nombrecliente, impuesto, /*...todos los que quieras */ param3) {
    this.#nombrecliente = nombrecliente;
    this.#impuesto = impuesto;
    // todos los que tenga...
  }

  // 4. getters
  get nombrecliente() {
    return this.#nombrecliente;
  }
  //setters
  set nombrecliente(newValue) {
    this.#nombrecliente = newValue;
  }
  //getters
  get impuesto() {
    return this.#impuesto;
  }

  set impuesto(newValue) {
    this.#impuesto = newValue;
  }
  // 5. funcion de calcular el impuesto
  calcularImpuesto() {
    return (this.#impuesto.montoButoAnual - this.#impuesto.deducciones) * 0.21;
  }
}

// instancia con minúscula, Clase con mayúscula.
//const firu = new Perro('firualais', 'chihuahua');
