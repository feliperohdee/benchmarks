const Promise = require('bluebird');
const {
    Observable
} = require('rxjs');

const withPromise = () => {
    return new Promise((resolve, reject) => {
        resolve(null);
    });
};

const withRxjs = () => {
    return Observable.create(subscriber => {
        subscriber.next(null);
        subscriber.complete();
    });
};

const iterator = (fn, cb, max = 1000, i = 0) => {
    if (i >= max) {
        return cb(i);
    }

    const done = () => {
        iterator(fn, cb, max, i + 1);
    }

    fn(done);
}

const tests = [
    () => {
        const {
            heapUsed: startHeapUsed
        } = process.memoryUsage();
        
        console.time('promise');

        const promiseTest = done => withPromise()
            .finally(done);

        const result = iterator(promiseTest, () => {
            const {
                heapUsed: finalHeapUsed,
                heapTotal: finalHeapTotal
            } = process.memoryUsage();

            console.timeEnd('promise');
            console.log('heapUsed', (finalHeapUsed - startHeapUsed) / 1024, 'Kb');

            tests[1]();
        });
    },
    () => {
        const {
            heapUsed: startHeapUsed
        } = process.memoryUsage();
        
        console.time('rxjs');

        const rxjsTest = done => withRxjs()
            .subscribe(null, null, done);

        const result = iterator(rxjsTest, () => {
            const {
                heapUsed: finalHeapUsed,
                heapTotal: finalHeapTotal
            } = process.memoryUsage();

            console.timeEnd('rxjs');
            console.log('heapUsed', (finalHeapUsed - startHeapUsed) / 1024, 'Kb');
        });
    }
];

tests[0]();