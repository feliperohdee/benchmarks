const _ = require('lodash');
const hrtime = require('pretty-hrtime');
const Promise = require('bluebird');
const {
    Observable
} = require('rxjs');

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

const iterator = (fn, cb, max = 50000, i = 0) => {
    if (i >= max) {
        return cb(i);
    }

    const done = () => {
        process.nextTick(() => iterator(fn, cb, max, i + 1));
    }

    fn(done);
}

const print = (results, chunkSize = 2) =>  {
    const chunked = _.chunk(results, chunkSize);

    _.each(chunked, result => {
        _.each(result, ({
            label,
            time
        }) => {
            console.log(`${label}: ${time}`);
        });

        console.log();
    });
}

const tests = [{
    label: 'promise creation',
    fn: done => withPromise()
        .finally(done)
}, {
    label: 'observable creation',
    fn: done => withRxjs()
        .subscribe(null, null, done)
}, {
    label: 'promise with map projection',
    fn: done => withPromise()
        .map(response => response ** 2)
        .finally(done)
}, {
    label: 'observable with map projection',
    fn: done => withRxjs()
        .map(response => response ** 2)
        .subscribe(null, null, done)
}, {
    label: 'promise with filter',
    fn: done => withPromise()
        .filter(response => response % 2)
        .finally(done)
}, {
    label: 'observable with filter',
    fn: done => withRxjs()
        .filter(response => response % 2)
        .subscribe(null, null, done)
}, {
    label: 'promise with reduction',
    fn: done => withPromise()
        .reduce((reduction, response) => {
            return reduction += response;
        }, 0)
        .finally(done)
}, {
    label: 'observable with reduction',
    fn: done => withRxjs()
        .reduce((reduction, response) => {
            return reduction += response;
        }, 0)
        .subscribe(null, null, done)
}];

const results = [];
const iteractions = 100000;
const runTimes = 5;
const chunkSize = runTimes * 2;

(function run(index = 0, runIndex = 1) {
    const {
        label,
        fn
    } = tests[index];

    console.log(`running test ${index} with ${iteractions} iteractions: ${label}`);

    const start = process.hrtime();

    iterator(fn, () => {
        const end = process.hrtime(start);
        const time = hrtime(end, {
            precise: true
        });

        results.push({
            label,
            time
        });
        
        const shouldRepeat = runIndex < runTimes;
        const nextIndex = shouldRepeat ? index : index + 1;
        const nextRunIndex = shouldRepeat ? runIndex + 1 : 1;

        if (tests[nextIndex]) {
            run(nextIndex, nextRunIndex);
        } else {
            console.log();
            print(results, chunkSize);
        }
    }, iteractions);
})();
