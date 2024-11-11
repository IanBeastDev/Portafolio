let resta = function (a, b) {
    return a -  b;
};

console.log(resta(5, 3)); //2


let multiplicacion = (a, b) => a * b;

console.log(multiplicacion(5, 3)); //15

    let Hola = {
        nombre:"Ian",
        saludar:function() {
            setTimeout(() => {
                console.log('Hola, soy ${this.nombre}'); 
            }, 1000);
        }
    }
    {
    }

let frutas = ["🍎","🍐","🍇","🍓"];
frutas.push("🥭");
frutas.unshift("🍌");
frutas.pop();
console.log(frutas); // 🍌, 🍎, 🍐, 🍇, 🍓
let frutas2 = frutas.slice(1, 3);
console.log(frutas2.join(" - ")); // 🍎 - 🍐
 console.log(frutas.length); // 5
console.log(frutas.indexOf("🍇")); // 3
let frutas3 = frutas.map((fruta) => fruta +"🍉");
console.table(frutas3);

