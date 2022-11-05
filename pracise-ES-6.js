
// const allName = ['Allah', 'Muhammad (saw)', 'Osama Yunus'];
// let numbers = {
//     int: [9, 2, 3, 1, 5, 6, 3, 4, 45],
//     floot: [2.32, .23, 4.45, 89.90],
//     fundamentalNum: [1, 3, 5, 7, 11, 13, 17, 19, 23]
// };
// let myPosition = `my position is ${numbers['int'][3]}`;
// console.log(myPosition);

// let getRemainder = numbers['int'].filter(x => (x % 3 === 0));
// console.log(getRemainder);
// let total = numbers['fundamentalNum']['reduce']((y, x) => x + y, 0);
// console['log'](total);

// let findNumber = numbers[`int`]['find'](x => x > 2);
// console[`log`](`my number ${findNumber}`);

// let findNumber2 = numbers.int.find(x => x > 2);
// console.log(findNumber);

// let { int, floot, fundamentalNum } = { ...numbers };
// console.log(int);
// let lengthName = allName.map(x => x.length);

// console['log'](lengthName, allName);

// const maxNumber = numbers['fundamentalNum']['map'](x => {
//     return x >= 23
// });
// console.log(maxNumber);
class student {
    constructor(personID, personName, personGerder) {
        this.id = personID;
        this.gender = personGerder;
        this.name = personName;
    }
}
person = new student(9090478, 'Osama Yunus', 'Male');
console.log(person);
