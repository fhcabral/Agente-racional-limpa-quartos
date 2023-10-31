function formatarMatriz(matriz) {
    let ambienteFormatado = '';
    for (let i = 0; i < matriz.length; i++) {
      ambienteFormatado += matriz[i].join(' ') + '\n';
    }
    return ambienteFormatado;
}

const matriz = [['A-dirty', 'B', 'C-dirty', 'D'],
['E', 'F-dirty', 'G', 'H'],
['I-dirty', 'J', 'K-dirty', 'L-dirty'],
['M', 'N', 'O-dirty', 'P']];

let energia = 100;
const capacidadeMaxima = 10;
let bolsa = 0;
let posicaoX = 0;
let posicaoY = 0;

function limparAmbiente() {
    if (posicaoX < matriz.length) {
        if (posicaoX >= 0 && posicaoX < matriz.length && posicaoY >= 0 && posicaoY < matriz[0].length) {
            const cellValue = matriz[posicaoX][posicaoY];
            console.log(`MOVEU-SE, ENERGIA RESTANTE: ${energia}`);
            if (cellValue.endsWith('-dirty')) {
                matriz[posicaoX][posicaoY] = cellValue.replace(/-dirty$/, ''); // Limpa a sujeira
                energia -= 1;
                bolsa += 1;
                console.log(`LIMPOU, ENERGIA RESTANTE: ${energia}`);
            }
        }

        if (bolsa === capacidadeMaxima || energia <= 0) {
            console.log("Bolsa cheia ou energia esgotada, retornando para Casa (A).");
            posicaoX = 0;
            posicaoY = 0;
            energia = 100;
            bolsa = 0;
        }

        // ZigZag pattern
        if (posicaoX % 2 === 0) { // Se a linha é par, move para a direita
            posicaoY += 1;
            if (posicaoY >= matriz[0].length) { // Se atingiu o limite direito, move para baixo e ajusta Y
                posicaoX += 1;
                posicaoY -= 1;
            }
        } else { // Se a linha é ímpar, move para a esquerda
            posicaoY -= 1;
            if (posicaoY < 0) { // Se atingiu o limite esquerdo, move para baixo e ajusta Y
                posicaoX += 1;
                posicaoY += 1;
            }
        }
        energia -= 1;

        console.log(formatarMatriz(matriz)); // Imprime o ambiente após a limpeza
        setTimeout(limparAmbiente, 1000); // Chama a função novamente após 1 segundo
    } else {
        console.log("Limpeza concluída.");
    }
}

limparAmbiente(); // Inicia a limpeza
