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
        let i = 1;
        let p;

        do {
        
          if (numero % i == 0){
           p = p + 1;
          }

          i = i + 1;
        } while (i <= numero)

        if(p > 2){
          p = false;
        } else {
          p = true;
        }

      return p;
    }
}

let app = new App();

console.log(app.sumatoriaSerieUno(9));

console.log(app.sumatoriaSerieDos(9));

console.log(app.esPrimo(2));
console.log(app.esPrimo(77));