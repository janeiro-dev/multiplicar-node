//requireds:
const { rejects } = require('assert');
const fs = require('fs'); //require de node
//const express = require('express'); //require no nativo de node
//const tal = require('./tal'); //require que hacemos nosotros
const colors = require('colors');


let listarTabla = (base, limite = 10) => {

    console.log('====================');
    console.log(`Tabla del ${base}`.green);
    console.log('====================');

    for (let i = 1; i <= limite; i++) {
        console.log(`${base} x ${i} = ${base * i}\n`);
    }

}

let crearArchivo = (base, limite = 10) => {

    return new Promise((resolve, reject) => {

        if (!Number(base) || !Number(limite)) {
            reject(`El valor introducido '${base}' y/o el valor introducido '${limite}' no es un numero`);
            return;
        }

        let data = ''


        for (let i = 1; i <= limite; i++) {
            data += `${base} x ${i} = ${base * i}\n`;
        }

        fs.writeFile(`tablas/tabla del ${base}.txt`, data, (err) => {
            if (err) reject(err)
            else
                resolve(`tabla-${base}-al-${limite}.txt`);
        });

    });

}

module.exports = {
    crearArchivo,
    listarTabla
}