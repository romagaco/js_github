console.log("ejercicio tele");

class television {
    #encendido = false;
    #canal = 0;
    #canales;
    #volumen = 0;
    #marca;


    constructor(marca, canales){
        this.#marca = marca;
        this.#canales = canales;
    }

    encerder() {
        this.#encendido = true;
    }

    apagar() {
        this.#encendido = false;
    }

    siguienteCanal() {
        if (this.#encendido) {
            if (this.#canal === 100) {
                this.#canal = 0;
            } else {
                this.#canal = this.#canal + 1;
            }
        } else {
            console.log("El televisor no esta encedido, no se puede cambiar de canal");
        }
    }

    canalAnterior() {
        if (this.#encendido) {
            if (this.#canal === 0) {
                this.#canal = 100;
            } else {
                this.#canal = this.#canal - 1;
            }
        } else {
            console.log("El televisor no esta encedido, no se puede cambiar de canal");
        }
    }

    cambiarCanal(canal) {
        if (this.#encendido) {
            if (canal <=100 && canal >= 0) {
                this.#canal = canal;
            } else {
                console.log("no posees ese canal en tu paquete, contacta con tu proveedor de cable");
            } 
         } else {
             console.log("El televisor no esta encedido, no se puede cambiar de canal");
         }
    }

    subirVolumen() {
        if (this.#encendido) {
            if (this.#volumen === 100) {
                console.log("El volumen ya esta al maximo, no se puede subir mas");
            } else {
                this.#volumen = this.#volumen + 2;
            }
         } else {
             console.log("El televisor no esta encedido, no se puede subir volumen");
         }
    }

    bajarVolumen() {
        if (this.#encendido) {
            if (this.#volumen === 0) {
                console.log("El volumen ya esta al minimo, no se puede bajar mas")
            } else {
                this.#volumen = this.#volumen - 2;
            }
         } else {
             console.log("El televisor no esta encedido, no se puede subir volumen");
         }
    }

    toString(){
        return `Televisor: ${this.#marca}, canales: ${this.#canales}, Canal actual: ${this.#canal}, Volumen actual: ${this.#volumen}`;
    }
}


let tele =  new television("Samsung", 100);
console.log(tele.toString());

tele.cambiarCanal(97);  // no nos permite cambiar de canal porque no esta encendido
console.log(tele.toString());

tele.encerder(); // encendemos el televisor
console.log(tele.toString());

tele.cambiarCanal(97);  // cambiamos de canal
console.log(tele.toString());

tele.siguienteCanal(); // cambiamos de canal
console.log(tele.toString());

tele.siguienteCanal();
tele.siguienteCanal();
tele.siguienteCanal();
tele.siguienteCanal(); // damos toda la vuelta para comprobar que este no va mas haya de los canales 
console.log(tele.toString());


tele.cambiarCanal(207);  // comprobamos que no se puede cambiar a un canal que no existe

tele.subirVolumen(); // subimos el volumen
console.log(tele.toString());

tele.subirVolumen(); 
tele.subirVolumen(); 
tele.subirVolumen(); 
tele.subirVolumen(); 
tele.subirVolumen(); 
console.log(tele.toString());


tele.bajarVolumen(); // bajamos el volumen
console.log(tele.toString());

tele.bajarVolumen();
tele.bajarVolumen();
tele.bajarVolumen();
console.log(tele.toString());


tele.apagar(); // apagamos el televisor
console.log(tele.toString());