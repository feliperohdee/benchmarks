const _ = require('lodash');
const hrtime = require('pretty-hrtime');

/**
 * Number.prototype.format(n, x, s, c)
 * 
 * @param integer n: length of decimal
 * @param integer x: length of whole part
 * @param mixed   s: sections delimiter
 * @param mixed   c: decimal delimiter
 */
Number.prototype.format = function(n = 0, x = 3, s = '.', c = ',') {
    var re = '\\d(?=(\\d{' + x + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};

module.exports = class Suite {
    constructor(iteractions = 100000, runTimes = 5, chunkSize = null) {
        this.results = [];
        this.iteractions = iteractions;
        this.runTimes = runTimes;
        this.chunkSize = chunkSize || runTimes * 2;
    }

    iterator(fn, cb, i = 0) {
        if (i >= this.iteractions) {
            return cb();
        }

        const done = () => {
            process.nextTick(() => this.iterator(fn, cb, i + 1));
        }

        fn(i, done);
    }

    opsSecond(iteractions, ms) {
        const inSeconds = parseFloat(ms) / 1000;

        return `${Math.floor(this.iteractions / inSeconds).format()} ops/sec`;
    }

    print() {
        const chunked = _.chunk(this.results, this.chunkSize);

        _.each(chunked, result => {
            _.each(result, ({
                label,
                time
            }) => {
                console.log(`${label}: ${time} ${this.opsSecond(this.iteractions, time)}`);
            });

            console.log();
        });
    }

    run(tests, index = 0, runIndex = 1) {
        const {
            label,
            fn
        } = tests[index];

        console.log(`running test ${index} with ${this.iteractions.format()} iteractions: ${label}`);

        const start = process.hrtime();

        this.iterator(fn, () => {
            const end = process.hrtime(start);
            const time = hrtime(end, {
                precise: true
            });

            this.results.push({
                label,
                time
            });

            const shouldRepeat = runIndex < this.runTimes;
            const nextIndex = shouldRepeat ? index : index + 1;
            const nextRunIndex = shouldRepeat ? runIndex + 1 : 1;

            if (tests[nextIndex]) {
                this.run(tests, nextIndex, nextRunIndex);
            } else {
                console.log();
                this.print();
            }
        });
    }
}
