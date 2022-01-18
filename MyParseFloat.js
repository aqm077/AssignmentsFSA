function myParseFloat(str) {
    let result = 0;

    // let index = 0;
    // while (str[index] != ".") index++;

    const [nonDecimalPart, decimalPart] = str.split('.');

    // let nonDecimalPart = str.substring(0, index);
    // let decimalPart = str.substring(index + 1);

    let decimalPartMultiplier = 0.1;
    let nonDecimalPartMultiplier = 1;

    let index = nonDecimalPart.length - 1;
    while (index >= 0) {
        result += nonDecimalPart[index] * nonDecimalPartMultiplier;
        nonDecimalPartMultiplier *= 10;
        index--;
    }

    index = 0;
    while (index < decimalPart.length) {
        result += decimalPart[index] * decimalPartMultiplier;
        decimalPartMultiplier /= 10;
        index++;
    }

    return result;
}

let ans = myParseFloat("507.234");
console.log(ans, "-> Typeof is ->", typeof ans);