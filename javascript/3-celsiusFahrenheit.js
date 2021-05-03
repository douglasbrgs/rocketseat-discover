/**
 * Celsius em Fahrenheit
 * recebe string em celsius ou fahrenheit e transforma na outra unidade
 */
const convertToCelsius = fahrenheit => ((fahrenheit - 32) * 5) / 9;
const convertToFahrenheit = celsius => (celsius * 9) / 5 + 32;

function degreeConverter(degree) {
    try {
        let ehFahrenheit = degree.includes('F');
        let ehCelsius = degree.includes('C');

        let updateDegree;
        let calcDegree = 0;
        let degreeSinal = '';

        if (ehFahrenheit) {
            updateDegree = Number(degree.replace('F', ''));
            if (isNaN(updateDegree)) {
                throw new Error('Grau inválido');
            }
            calcDegree = convertToCelsius(updateDegree);
            degreeSinal = 'C';
        }
        if (ehCelsius) {
            updateDegree = Number(degree.replace('C', ''));
            if (isNaN(updateDegree)) {
                throw new Error('Grau inválido');
            }
            calcDegree = convertToFahrenheit(updateDegree);
            degreeSinal = 'F';
        }
        return calcDegree.toFixed(2) + degreeSinal;
    } catch (error) {
        return error.message;
    }
}

console.log(degreeConverter('68F'));
console.log(degreeConverter('20C'));
console.log(degreeConverter('20FC'));
console.log(degreeConverter(''));
