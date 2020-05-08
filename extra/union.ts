// criando o alias!
type MeuToken = string |  number;

// Union Types
function processaToken(token: MeuToken) {
// Type Guards
// essa estratégia remete à programação procedural pois envolve uma sucessão de if's para detectar o tipo dos elementos.
  if (typeof token === "string") {
    // typescript entende que é o tipo string e faz autocomplete para este tipo. A função replace só existe em string
    return token.replace(/2/g, "X");
  } else {
    // toFixed só existe em number!
    return token.toFixed().replace(/2/g, "X");
  }
}

const tokenProcessado1 = processaToken("1234");
const tokenProcessado = processaToken(1234);
