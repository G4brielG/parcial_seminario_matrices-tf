m1 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
m2 = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];

let multiplicacion = new Array(3);
for (x = 0; x < multiplicacion.length; x++)
  multiplicacion[x] = new Array(3).fill(0);

for (x = 0; x < multiplicacion.length; x++) {
  for (y = 0; y < multiplicacion[x].length; y++) {
    for (z = 0; z < 3; z++) {
      multiplicacion[x][y] = multiplicacion[x][y] + m1[x][z] * m2[z][y];
    }
  }
}

console.log("resultados calculos js: ", multiplicacion)

let matriz1 = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 3]);
let matriz2 = tf.tensor2d([1, 2, 3, 4, 5, 6, 7, 8, 9], [3, 3]);

matriz1.matMul(matriz2).print();

// Gonzalez Gabriel
// Grupo 1