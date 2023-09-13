// EJECICIO 1
function aleatorio() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
      resolve(numeroAleatorio);
    }, 2000);
  });
}

function cuadrado(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const resultado = numero * numero;
      resolve(resultado);
    }, 3000);
  });
}

function raizCuadrada(numero) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const raizCuadrada = Math.sqrt(numero);
      resolve(raizCuadrada);
    }, 1000);
  });
}

aleatorio()
  .then((numero) => {
    console.log("Número aleatorio generado:", numero);
    return cuadrado(numero);
  })
  .then((resultadoCuadrado) => {
    console.log("Número al cuadrado:", resultadoCuadrado);
    return raizCuadrada(resultadoCuadrado);
  })
  .then((raiz) => {
    console.log("Raíz cuadrada:", raiz);
  })
  .catch((error) => {
    console.error("Error:", error);
  });

//EJERCICIO 2

const URLArray = [
  "https://pokeapi.co/api/v2/pokemon/1",
  "https://pokeapi.co/api/v2/pokemon/2",
  "https://pokeapi.co/api/v2/pokemon/3",
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

// EJERCICIO 3

function promesasParalelo(funciones) {
  const promesas = funciones.map((funcion) => funcion());
  return Promise.all(promesas)
    .then((resultado) => {
      return resultado;
    })
    .catch((error) => {
      console.log(error);
    });
}

const promesa1 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Promesa 1"), 1000));
const promesa2 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Promesa 2"), 2000));
const promesa3 = () =>
  new Promise((resolve) => setTimeout(() => resolve("Promesa 3"), 3000));

const funciones = [promesa1, promesa2, promesa3];

promesasParalelo(funciones)
  .then((resultados) => {
    console.log(resultados);
  })
  .catch((error) => {
    console.log(error);
  });

// EJERCICIO 4

function promesasRetraso(n) {
  function promesa(numero, tiempo) {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(numero);
        resolve(numero);
      }, tiempo);
    });
  }

  const promesas = [];
  for (let i = 1; i <= n; i++) {
    promesas.push(promesa(i, i * 1000));
  }

  return Promise.all(promesas).then(() => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve("Todas las promesas se resolvieron");
      }, n * 1000);
    });
  });
}

promesasRetraso(5).then((mensaje) => {
  console.log(mensaje);
});


// EJERCICIO 5

