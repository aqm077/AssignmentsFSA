/*function to calculate percentage*/
function aggrigatePercent(marks) {
    var total = 0;
    var percentScore = 0;

    for (var score of marks) total += score;

    percentScore = total / marks.length;
    return percentScore;
}

function isDistinction(totalPercent) {
    return totalPercent >= 75
}
function isFirstClass(totalPercent) {
    return totalPercent >= 65 && totalPercent < 75
}
function isSecondClass(totalPercent) {
    return totalPercent >= 55 && totalPercent < 65
}
function isPassClass(totalPercent) {
    return totalPercent >= 45 && totalPercent < 55
}

/*function to get class*/
function getClass(totalPercent) {
    var Remarks = [
        "First Class with Distinction",
        "First Class",
        "Second Class",
        "Pass Class",
        "Failed",
    ];


    if (isDistinction(totalPercent)) return Remarks[0];
    else if (isFirstClass(totalPercent)) return Remarks[1];
    else if (isSecondClass(totalPercent)) return Remarks[2];
    else if (isSecondClass(totalPercent)) return Remarks[3];
    else return Remarks[4];
}

/*Driver Code*/
var marks = [90, 80, 70, 60, 50, 60];
console.log(getClass(aggrigatePercent(marks)));

