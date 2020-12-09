export default class App {

    sumatoriaSerieUno(numero){
        let suma = 0;

        for(let i = 1; i <= numero; i = i + 1){
            let fraccion = 1 / i;
            suma = suma + fraccion;
            fraccion = 0;
        }

      return suma;
    }
}

let app = new App();

console.log(app.sumatoriaSerieUno(9));