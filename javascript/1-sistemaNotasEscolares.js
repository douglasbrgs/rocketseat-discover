/* tranformar notas escolares
 * de 90 pra cima - A
 * entre 80 - 89 - B
 * entre 70 - 79 - C
 * entre 60 - 69 - D
 * menor que 60 - F
 */

function transformaScore(score) {
    let scoreA = score >= 90 && score <= 100;
    let scoreB = score >= 80 && score <= 89;
    let scoreC = score >= 70 && score <= 79;
    let scoreD = score >= 60 && score <= 69;
    let scoreF = score < 60 && score >= 0;

    let scoreFinal;

    if (scoreA) {
        scoreFinal = 'A';
    } else if (scoreB) {
        scoreFinal = 'B';
    } else if (scoreC) {
        scoreFinal = 'C';
    } else if (scoreD) {
        scoreFinal = 'D';
    } else if (scoreF) {
        scoreFinal = 'F';
    } else {
        scoreFinal = 'Nota inválida';
    }

    return scoreFinal;
}

/* tranformar notas escolares
 * de 90 pra cima - A
 * entre 80 - 89 - B
 * entre 70 - 79 - C
 * entre 60 - 69 - D
 * menor que 60 - F
 */
console.log(transformaScore(90));
console.log(transformaScore(45));
console.log(transformaScore(75));
console.log(transformaScore(-1));
console.log(transformaScore(101));
console.log(transformaScore(100));
console.log(transformaScore(65));
console.log(transformaScore(0));
console.log(transformaScore(95));
