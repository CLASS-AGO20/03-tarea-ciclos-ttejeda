export default class App {

    sumatoriaSerieUno(numero){
        let suma = 0;

        for(let i = 1; i <= numero; i = i + 1){
            suma = suma + (1 / i);
        }

      return suma;
    }

    sumatoriaSerieDos(numero){
        let i = 1;
        let suma = 0;

        while(i <= numero){
            
            if(i % 2 == 0 || i == 1){
              suma = suma + (1 / i);
            } else {
              suma = suma - (1 / i);
            }

          i = i + 1;
        }

      return suma;
    }

    esPrimo(numero){
        let i = 2;
        let primo;
        let limite = Math.round(Math.sqrt(numero));

        do {
        
          if (numero % i == 0){
           return primo = false;
          } else {
            primo = true;
          }

          i = i + 1;
        } while (i <= limite);

      return primo;
    }

    obtenerMultiplos(inicio, fin){
      
        if (inicio > fin){
         let m = inicio;
         incio = fin;
          fin = m;
       }

        let i = inicio;
        let numeros = "";
      
        do{

          if (i % 3 == 0){
            numeros = numeros + i;
          }

          i = i + 1;
        } while (i <= fin);

      return numeros;
    }
    
    obtenerImpares(numero1, numero2){

        if(numero1 > numero2){
          let m = numero1;
          numero1 = numero2;
          numero2 = m;
        }

        let i = numero1;
        let impares = 0;

        do {
          
          if (i % 2 != 0){
            if(impares == 0){
              impares = i + impares;
              impares = impares.toString();
            } else {
              impares = i + "," + impares;
            }
          }

          i = i + 1;
        } while (i <= numero2)

      return impares;
    }
}

let app = new App();

console.log(app.sumatoriaSerieUno(9));

console.log(app.sumatoriaSerieDos(9));

console.log(app.esPrimo(11));
console.log(app.esPrimo(77));

console.log(app.obtenerMultiplos(13, 25));

console.log(app.obtenerImpares(12, 17));
console.log(app.obtenerImpares(25, 11));