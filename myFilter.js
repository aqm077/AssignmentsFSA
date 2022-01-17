/* Making our own custon filter and adding it to Array prototype*/
/*Note: do not use arrow function, behaviour of this will be changed */

Array.prototype.myFilter = function (callBack) {
    const result = [];

    for (let item of this)
        callBack(item) && result.push(item);

    return result;
}

/* filter even numbers */
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myFilter((element) => {
    return element % 2 == 0;
}))
/* filter odd numbers */
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myFilter((element) => {
    return element % 2 !== 0;
}))
/* filter multiples of three */
console.log([1, 2, 3, 4, 5, 6, 7, 8, 9, 10].myFilter((element) => {
    return element % 3 == 0;
}))

const students = [
    { name: "Aleem", age: 20, department: "CSE" },
    { name: "Arbaaz", age: 21, department: "Civil" },
    { name: "Furkhan", age: 22, department: "MECH" },
    { name: "Mansoor", age: 25, department: "CSE" },
    { name: "Wasif", age: 27, department: "CSE" },
    { name: "Irfan", age: 19, department: "IT" },
    { name: "Naveed", age: 22, department: "ECE" },
    { name: "Arsalan", age: 22, department: "CSE" }
];

console.log(students.myFilter((student) => {
    return student.department === "CSE"
}))
