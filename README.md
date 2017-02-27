## Usage

npm i && npm start

		[21711:0x102801600]       63 ms: Scavenge 3.2 (9.0) -> 2.8 (10.0) MB, 0.9 / 0.0 ms  allocation failure # it shows garba collector actions
		[21711:0x102801600]       75 ms: Scavenge 3.4 (10.0) -> 3.1 (11.0) MB, 0.9 / 0.0 ms  allocation failure
		[21711:0x102801600]      106 ms: Scavenge 4.4 (11.0) -> 3.9 (13.0) MB, 0.5 / 0.0 ms  allocation failure
		[21711:0x102801600]      155 ms: Scavenge 5.9 (13.0) -> 4.6 (14.0) MB, 0.9 / 0.0 ms  allocation failure
		[21711:0x102801600]      191 ms: Scavenge 6.6 (14.0) -> 5.3 (14.0) MB, 1.0 / 0.0 ms  allocation failure
		[21711:0x102801600]      234 ms: Scavenge 7.5 (14.0) -> 6.1 (15.0) MB, 1.1 / 0.0 ms  allocation failure
		[21711:0x102801600]      267 ms: Scavenge 8.1 (16.0) -> 6.8 (20.0) MB, 1.2 / 0.0 ms  allocation failure
		[21711:0x102801600]      344 ms: Scavenge 11.3 (21.0) -> 8.3 (21.0) MB, 1.5 / 0.0 ms  allocation failure
		[21711:0x102801600]      368 ms: Mark-sweep 9.3 (21.0) -> 7.6 (22.0) MB, 9.5 / 0.0 ms  Isolate::RequestGarbageCollection GC in old space requested
		[21711:0x102801600]      415 ms: Scavenge 11.8 (22.0) -> 8.0 (22.0) MB, 0.4 / 0.0 ms  allocation failure
		[21711:0x102801600]      448 ms: Scavenge 11.9 (22.0) -> 8.0 (22.0) MB, 0.2 / 0.0 ms  allocation failure
		[21711:0x102801600]      475 ms: Scavenge 11.9 (22.0) -> 8.0 (22.0) MB, 0.1 / 0.0 ms  allocation failure
		promise: 107.973ms
		heapDelta 524.078125 Kb
		
		[21711:0x102801600]      487 ms: Mark-sweep 8.2 (22.0) -> 7.6 (22.0) MB, 7.4 / 0.0 ms  Isolate::RequestGarbageCollection GC in old space requested
		[21711:0x102801600]      508 ms: Scavenge 11.7 (22.0) -> 8.8 (22.0) MB, 1.1 / 0.0 ms  allocation failure
		[21711:0x102801600]      522 ms: Scavenge 11.7 (22.0) -> 9.6 (23.0) MB, 3.9 / 0.0 ms  allocation failure
		rxjs: 36.710ms
		heapDelta 2868.5859375 Kb
