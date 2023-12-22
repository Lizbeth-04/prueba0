'use strict';

function Student(nombre, correo, promedio) {
    this.nombre = nombre;
    this.correo = correo;
    this.promedio = promedio;

    this.validapromedio = function () {
        return this.promedio > 60 ? "Aprobado" : "Reprobado";
    }

    this.Usuario = function () {
        let partesCorreo = this.correo.split('@');
        return partesCorreo.length > 0 ? partesCorreo[0] : '';
    }
}

let studentOne = new Student('Liz-Enacala', 'lize.2mar@gmail.com', );

alert(studentOne.validapromedio());
alert(studentOne.Usuario());
