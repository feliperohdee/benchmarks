const Promise = require('bluebird');
const {
    Observable
} = require('rxjs');

const Suite = require('./');

const iteractions = 100000;
const suite = new Suite(iteractions);

const withPromise = () => {
    return new Promise((resolve, reject) => {
        resolve([1, 2, 3, 4, 5]);
    });
};

const withRxjs = () => {
    return Observable.create(subscriber => {
        subscriber.next(1);
        subscriber.next(2);
        subscriber.next(3);
        subscriber.next(4);
        subscriber.next(5);
        subscriber.complete();
    });
};

suite.run([{
    label: 'promise creation',
    fn: (i, done) => withPromise()
        .finally(done)
}, {
    label: 'observable creation',
    fn: (i, done) => withRxjs()
        .subscribe(null, null, done)
}, {
    label: 'promise with map projection',
    fn: (i, done) => withPromise()
        .map(response => response * 2)
        .finally(done)
}, {
    label: 'observable with map projection',
    fn: (i, done) => withRxjs()
        .map(response => response * 2)
        .subscribe(null, null, done)
}, {
    label: 'promise with filter',
    fn: (i, done) => withPromise()
        .filter(response => response % 2)
        .finally(done)
}, {
    label: 'observable with filter',
    fn: (i, done) => withRxjs()
        .filter(response => response % 2)
        .subscribe(null, null, done)
}, {
    label: 'promise with reduction',
    fn: (i, done) => withPromise()
        .reduce((reduction, response) => {
            return reduction += response;
        }, 0)
        .finally(done)
}, {
    label: 'observable with reduction',
    fn: (i, done) => withRxjs()
        .reduce((reduction, response) => {
            return reduction += response;
        }, 0)
        .subscribe(null, null, done)
}]);
