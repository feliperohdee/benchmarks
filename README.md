## Usage

npm i && node rxjs-vs-bluebird.js
npm i && node map-vs-object.js

## Sample 100000 iteractions

		running test 0 with 100.000 iteractions: promise creation
		running test 0 with 100.000 iteractions: promise creation
		running test 0 with 100.000 iteractions: promise creation
		running test 0 with 100.000 iteractions: promise creation
		running test 0 with 100.000 iteractions: promise creation
		running test 1 with 100.000 iteractions: observable creation
		running test 1 with 100.000 iteractions: observable creation
		running test 1 with 100.000 iteractions: observable creation
		running test 1 with 100.000 iteractions: observable creation
		running test 1 with 100.000 iteractions: observable creation
		running test 2 with 100.000 iteractions: promise with map projection
		running test 2 with 100.000 iteractions: promise with map projection
		running test 2 with 100.000 iteractions: promise with map projection
		running test 2 with 100.000 iteractions: promise with map projection
		running test 2 with 100.000 iteractions: promise with map projection
		running test 3 with 100.000 iteractions: observable with map projection
		running test 3 with 100.000 iteractions: observable with map projection
		running test 3 with 100.000 iteractions: observable with map projection
		running test 3 with 100.000 iteractions: observable with map projection
		running test 3 with 100.000 iteractions: observable with map projection
		running test 4 with 100.000 iteractions: promise with filter
		running test 4 with 100.000 iteractions: promise with filter
		running test 4 with 100.000 iteractions: promise with filter
		running test 4 with 100.000 iteractions: promise with filter
		running test 4 with 100.000 iteractions: promise with filter
		running test 5 with 100.000 iteractions: observable with filter
		running test 5 with 100.000 iteractions: observable with filter
		running test 5 with 100.000 iteractions: observable with filter
		running test 5 with 100.000 iteractions: observable with filter
		running test 5 with 100.000 iteractions: observable with filter
		running test 6 with 100.000 iteractions: promise with reduction
		running test 6 with 100.000 iteractions: promise with reduction
		running test 6 with 100.000 iteractions: promise with reduction
		running test 6 with 100.000 iteractions: promise with reduction
		running test 6 with 100.000 iteractions: promise with reduction
		running test 7 with 100.000 iteractions: observable with reduction
		running test 7 with 100.000 iteractions: observable with reduction
		running test 7 with 100.000 iteractions: observable with reduction
		running test 7 with 100.000 iteractions: observable with reduction
		running test 7 with 100.000 iteractions: observable with reduction

		promise creation: 732.791813 ms 136.464 ops/sec
		promise creation: 640.952951 ms 156.017 ops/sec
		promise creation: 613.39125 ms 163.028 ops/sec
		promise creation: 613.0949 ms 163.106 ops/sec
		promise creation: 612.095946 ms 163.373 ops/sec
		observable creation: 114.069972 ms 876.654 ops/sec
		observable creation: 105.422061 ms 948.568 ops/sec
		observable creation: 80.024449 ms 1.249.618 ops/sec
		observable creation: 79.873934 ms 1.251.972 ops/sec
		observable creation: 85.394014 ms 1.171.042 ops/sec

		promise with map projection: 1.075889618 s 92.946.337 ops/sec
		promise with map projection: 1.025769784 s 97.487.761 ops/sec
		promise with map projection: 1.033215218 s 96.785.256 ops/sec
		promise with map projection: 1.037326397 s 96.401.672 ops/sec
		promise with map projection: 1.054463433 s 94.834.962 ops/sec
		observable with map projection: 224.853376 ms 444.734 ops/sec
		observable with map projection: 232.962681 ms 429.253 ops/sec
		observable with map projection: 215.025188 ms 465.061 ops/sec
		observable with map projection: 222.562504 ms 449.311 ops/sec
		observable with map projection: 223.56541 ms 447.296 ops/sec

		promise with filter: 1.181999186 s 84.602.427 ops/sec
		promise with filter: 1.152701194 s 86.752.751 ops/sec
		promise with filter: 1.183820036 s 84.472.298 ops/sec
		promise with filter: 1.227777106 s 81.448.008 ops/sec
		promise with filter: 1.239117047 s 80.702.626 ops/sec
		observable with filter: 237.89729 ms 420.349 ops/sec
		observable with filter: 236.556414 ms 422.732 ops/sec
		observable with filter: 221.166345 ms 452.148 ops/sec
		observable with filter: 234.481943 ms 426.472 ops/sec
		observable with filter: 253.546969 ms 394.404 ops/sec

		promise with reduction: 1.5084539380000002 s 66.293.041 ops/sec
		promise with reduction: 1.510210157 s 66.215.949 ops/sec
		promise with reduction: 1.5766771469999998 s 63.424.525 ops/sec
		promise with reduction: 1.513207153 s 66.084.805 ops/sec
		promise with reduction: 1.519261065 s 65.821.472 ops/sec
		observable with reduction: 377.908381 ms 264.614 ops/sec
		observable with reduction: 394.729729 ms 253.337 ops/sec
		observable with reduction: 381.073314 ms 262.416 ops/sec
		observable with reduction: 377.764313 ms 264.715 ops/sec
		observable with reduction: 404.940159 ms 246.950 ops/sec
