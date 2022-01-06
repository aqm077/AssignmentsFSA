function myParseFloat(str) {
    var result = 0;

    var index = 0;
    while (str[index] != ".") index++;

    var nonDecimalPart = str.substring(0, index);
    var decimalPart = str.substring(index + 1);

    var decimalPartMultiplier = 0.1;
    var nonDecimalPartMultiplier = 1;

    index = nonDecimalPart.length - 1;
    while (index >= 0) {
        result += parseInt(nonDecimalPart[index]) * nonDecimalPartMultiplier;
        nonDecimalPartMultiplier *= 10;
        index--;
    }

    index = 0;
    while (index < decimalPart.length) {
        result += parseInt(decimalPart[index]) * decimalPartMultiplier;
        decimalPartMultiplier /= 10;
        index++;
    }

    return result;
}

var ans = myParseFloat("507.234");
console.log(ans, "-> Typeof is ->", typeof ans);