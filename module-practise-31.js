const numbers = [2, 3, 6, 7, 9];
let con = 0;
for (const number of numbers) {
    con = con + number;
}
// console.log(con);

const add = numbers.reduce((y, x) => x + y, 0);
// console.log(add);

// problems 5

const people = [
    { name: 'meena', age: 22 },
    { name: 'Osama', age: 20 },
    { name: 'nioto', age: 26 }
];
const ages = people.map(x => {
    return x.age;
})
// console.log(ages);
const total = people.reduce((y, x) => (x.age + y), 0);
const total1 = ages.reduce((y, x) => (x + y), 0);
// console.log(total, total1);

// problems 6.
const student = { name: 'Fredie', age: 26 };
// console.log(student.age);

// problems 7.

let data = {
    location: [
        {
            latitude: '34.5 , 37.8',
            longitute: '98.77 , 58.7',
            city: 'Hyderabad',
            country: 'India'
        }
    ]
};
// console.log(data.location[0].city);

// problem 8.

const object = {
    "id": 1,
    "name": "Leanne Graham",
    "username": "Bret",
    "email": "Sincere@april.biz",
    "address": {
        "street": "Kulas Light",
        "suite": "Apt. 556",
        "city": "Gwenborough",
        "zipcode": "92998-3874",
        "geo": {
            "lat": "-37.3159",
            "lng": "81.1496"
        }
    },
    "phone": "1-770-736-8031 x56442",
    "website": "hildegard.org",
    "company": {
        "name": "Romaguera-Crona",
        "catchPhrase": "Multi-layered client-server neural-net",
        "bs": "harness real-time e-markets"
    }
};
console.log(object.email, object.address, object.address.city, object.address.geo.lat, object.company.name);



