## Usage

npm i && npm start

## Sample 1000 iteractions

		[21922:0x102801600]       61 ms: Scavenge 3.2 (9.0) -> 2.8 (10.0) MB, 0.9 / 0.0 ms  allocation failure # it shows garba collector actions
		[21922:0x102801600]       73 ms: Scavenge 3.4 (10.0) -> 3.1 (11.0) MB, 0.9 / 0.0 ms  allocation failure
		[21922:0x102801600]      109 ms: Scavenge 4.4 (11.0) -> 3.8 (13.0) MB, 0.7 / 0.0 ms  allocation failure
		[21922:0x102801600]      151 ms: Scavenge 5.9 (13.0) -> 4.7 (14.0) MB, 1.0 / 0.0 ms  allocation failure
		[21922:0x102801600]      187 ms: Scavenge 6.6 (14.0) -> 5.3 (14.0) MB, 1.3 / 0.0 ms  allocation failure
		[21922:0x102801600]      228 ms: Scavenge 7.5 (14.0) -> 6.1 (15.0) MB, 1.0 / 0.0 ms  allocation failure
		[21922:0x102801600]      266 ms: Scavenge 8.1 (16.0) -> 6.8 (20.0) MB, 1.2 / 0.0 ms  allocation failure
		[21922:0x102801600]      344 ms: Scavenge 11.3 (21.0) -> 8.3 (21.0) MB, 1.4 / 0.0 ms  allocation failure
		[21922:0x102801600]      366 ms: Mark-sweep 9.2 (21.0) -> 7.6 (22.0) MB, 8.8 / 0.0 ms  Isolate::RequestGarbageCollection GC in old space requested
		promise: 26.917ms
		heapDelta 1610.390625 Kb
		
		[21922:0x102801600]      409 ms: Mark-sweep 9.2 (22.0) -> 7.6 (22.0) MB, 8.7 / 0.0 ms  Isolate::RequestGarbageCollection GC in old space requested # it shows garba collector actions
		rxjs: 10.153ms
		heapDelta 973.640625 Kb
