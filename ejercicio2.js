// EJECICIO 1
function numAleatorio() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
        resolve(numeroAleatorio);
      }, 2000);
    });
  }
  
  function elevarAlCuadrado(numero) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const resultado = numero * numero;
        resolve(resultado);
      }, 3000);
    });
  }
  
  function obtenerRaizCuadrada(numero) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const raizCuadrada = Math.sqrt(numero);
        resolve(raizCuadrada);
      }, 1000);
    });
  }
  
  numAleatorio()
    .then((numero) => {
      console.log("Número aleatorio generado:", numero);
      return elevarAlCuadrado(numero);
    })
    .then((resultadoCuadrado) => {
      console.log("Número al cuadrado:", resultadoCuadrado);
      return obtenerRaizCuadrada(resultadoCuadrado);
    })
    .then((raiz) => {
      console.log("Raíz cuadrada:", raiz);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
  
  //EJERCICIO 2
  
  const URLArray = [
    "http://www.fruityvice.com/api/fruit/1",
    "http://www.fruityvice.com/api/fruit/2",
    "http://www.fruityvice.com/api/fruit/3",
  ];
  
  const multipleFetch = (array) => {
    const arrayPromesas = [];
    array.forEach((e, i) => {
      arrayPromesas.push(
        fetch(array[i])
          .then((res) => res.json())
          .then((res) => res.name)
      );
    });
    return arrayPromesas;
  };
  
  Promise.all(multipleFetch(URLArray)).then((values) => {
    console.log(values);
  });
  