module.exports = function solveEquation(equation) {
    var coefficients = equation.replace("^2", " * x"); // obtaining an array of coefficients of the quadratic equation
    coefficients = coefficients.replace(/\s/g, '');
    coefficients = coefficients.match(/[^*x^+]+/g);
    coefficients = coefficients.map(string => +string);

    var [a, b, c] = coefficients;

    var x = [];
    x[1] = Math.round((- b + Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a));
    x[0] = Math.round((- b - Math.sqrt(Math.pow(b, 2) - 4 * a * c)) / (2 * a));
    x = x.sort((a, b) => a - b);
    return x;
}
