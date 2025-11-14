// Arquivo: pieces.js
// Função responsável por devolver os pontos (offsets) que compõem cada peça
// - `pieceType` é um inteiro de 0 a 6 que identifica a peça (I, J, L, O, S, T, Z)
// - `rotation` é 0..3 e determina a rotação da peça
function orientPoints(pieceType, rotation) {
  // results conterá um array com 4 coordenadas [x, y] (offsets relativos)
  let results = [];
  switch (pieceType) {
    // Tipo 0: peça I (linha longa)
    case 0:
      switch (rotation) {
        case 0:
          results = [
            [-2, 0],
            [-1, 0],
            [0, 0],
            [1, 0],
          ];
          break;
        case 1:
          results = [
            [0, -1],
            [0, 0],
            [0, 1],
            [0, 2],
          ];
          break;
        case 2:
          results = [
            [-2, 1],
            [-1, 1],
            [0, 1],
            [1, 1],
          ];
          break;
        case 3:
          results = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [-1, 2],
          ];
          break;
      }
      break;

    
    // Tipo 1: peça J (forma em gancho)
    case 1:
      switch (rotation) {
        case 0:
          results = [
            [-2, -1],
            [-2, 0],
            [-1, 0],
            [0, 0],
          ];
          break;
        case 1:
          results = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, -1],
          ];
          break;
        case 2:
          results = [
            [-2, 0],
            [-1, 0],
            [0, 0],
            [0, 1],
          ];
          break;
        case 3:
          results = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [-2, 1],
          ];
          break;
      }
      break;

    
    // Tipo 2: peça L (gancho invertido)
    case 2:
      switch (rotation) {
        case 0:
          results = [
            [-2, 0],
            [-1, 0],
            [0, 0],
            [0, -1],
          ];
          break;
        case 1:
          results = [
            [-1, -1],
            [-1, 0],
            [-1, 1],
            [0, 1],
          ];
          break;
        case 2:
          results = [
            [-2, 0],
            [-2, 1],
            [-1, 0],
            [0, 0],
          ];
          break;
        case 3:
          results = [
            [-2, -1],
            [-1, -1],
            [-1, 0],
            [-1, 1],
          ];
          break;
      }
      break;
    
    
    // Tipo 3: peça O (quadrado) - não rotaciona realmente
    case 3:
      results = [
        [-1, -1],
        [0, -1],
        [-1, 0],
        [0, 0],
      ];
      break;
    // Tipo 4: peça S (zig-zag)
    case 4:
      switch (rotation) {
        case 0:
          results = [
            [-1, -1],
            [-2, 0],
            [-1, 0],
            [0, -1],
          ];
          break;
        case 1:
          results = [
            [-1, -1],
            [-1, 0],
            [0, 0],
            [0, 1],
          ];
          break;
        case 2:
          results = [
            [-1, 0],
            [-2, 1],
            [-1, 1],
            [0, 0],
          ];
          break;
        case 3:
          results = [
            [-2, -1],
            [-2, 0],
            [-1, 0],
            [-1, 1],
          ];
          break;
      }
      break;



    // Tipo 5: peça T (em T)
    case 5:
      switch (rotation) {
        case 0:
          results = [
            [-1, 0],
            [0, 0],
            [1, 0],
            [0, -1],
          ];
          break;
        case 1:
          results = [
            [0, -1],
            [0, 0],
            [0, 1],
            [1, 0],
          ];
          break;
        case 2:
          results = [
            [-1, 0],
            [0, 0],
            [1, 0],
            [0, 1],
          ];
          break;
        case 3:
          results = [
            [0, -1],
            [0, 0],
            [0, 1],
            [-1, 0],
          ];
          break;
      }
      break;

    
    // Tipo 6: peça Z (zig-zag invertido)
    case 6:
      switch (rotation) {
        case 0:
          results = [
            [-2, -1],
            [-1, -1],
            [-1, 0],
            [0, 0],
          ];
          break;
        case 1:
          results = [
            [-1, 0],
            [-1, 1],
            [0, 0],
            [0, -1],
          ];
          break;
        case 2:
          results = [
            [-2, 0],
            [-1, 0],
            [-1, 1],
            [0, 1],
          ];
          break;
        case 3:
          results = [
            [-2, 0],
            [-2, 1],
            [-1, 0],
            [-1, -1],
          ];
          break;
      }
      break;
  }

  // Retorna os offsets (array de 4 pares [x,y]) para desenhar/posicionar a peça
  return results;
}
