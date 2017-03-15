const Suite = require('./');

const iteractions = 100000;
const suite = new Suite(iteractions);

const obj = {};
const map = new Map();

const bigObject = {};
const bigMap = new Map();

for (let i = 0; i <= iteractions; i++) {
    bigObject[`key-${i}`] = `value-${i}`;
    bigMap.set(`key-${i}`, `value-${i}`);
}

suite.run([{
    label: 'object set',
    fn: (i, done) => {
        obj[`key-${i}`] = `value-${i}`;

        done();
    }
}, {
    label: 'map set',
    fn: (i, done) => {
        map.set(`key-${i}`, `value-${i}`);

        done();
    }
}, {
    label: 'object get',
    fn: (i, done) => {
        bigObject[`key-${iteractions / 2}`];

        done();
    }
}, {
    label: 'map get',
    fn: (i, done) => {
        map.get(`key-${iteractions / 2}`);

        done();
    }
}]);
