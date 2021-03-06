Response =>  ServerResponse {
  _events:
   [Object: null prototype] { finish: [Function: bound resOnFinish] },
  _eventsCount: 1,
  _maxListeners: undefined,
  output: [],
  outputEncodings: [],
  outputCallbacks: [],
  outputSize: 0,
  writable: true,
  _last: false,
  chunkedEncoding: false,
  shouldKeepAlive: true,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _removedConnection: false,
  _removedContLen: false,
  _removedTE: false,
  _contentLength: null,
  _hasBody: true,
  _trailer: '',
  finished: false,
  _headerSent: false,
  socket:
   Socket {
     connecting: false,
     _hadError: false,
     _handle:
      TCP {
        reading: true,
        onread: [Function: onStreamRead],
        onconnection: null,
        _consumed: true,
        [Symbol(owner)]: [Circular] },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        paused: false,
        emitClose: false,
        autoDestroy: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     _events:
      [Object: null prototype] {
        end: [Array],
        drain: [Array],
        timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
        error: [Function: socketOnError],
        close: [Array],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause] },
     _eventsCount: 8,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: false,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        emitClose: false,
        autoDestroy: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     allowHalfOpen: true,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 40000,
        _connectionKey: '6::::5000',
        [Symbol(IncomingMessage)]: [Function],
        [Symbol(ServerResponse)]: [Function],
        [Symbol(asyncId)]: 17 },
     _server:
      Server {
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 40000,
        _connectionKey: '6::::5000',
        [Symbol(IncomingMessage)]: [Function],
        [Symbol(ServerResponse)]: [Function],
        [Symbol(asyncId)]: 17 },
     timeout: 120000,
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: bound onParserExecute],
        _headers: [],
        _url: '',
        socket: [Circular],
        incoming: [IncomingMessage],
        outgoing: null,
        maxHeaderPairs: 2000,
        _consumed: true,
        onIncoming: [Function: bound parserOnIncoming],
        parsingHeadersStart: 0,
        [Symbol(isReused)]: false },
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     [Symbol(asyncId)]: 157,
     [Symbol(lastWriteQueueSize)]: 0,
     [Symbol(timeout)]:
      Timeout {
        _called: false,
        _idleTimeout: 120000,
        _idlePrev: [TimersList],
        _idleNext: [TimersList],
        _idleStart: 8929,
        _onTimeout: [Function: bound ],
        _timerArgs: undefined,
        _repeat: null,
        _destroyed: false,
        [Symbol(unrefed)]: true,
        [Symbol(asyncId)]: 173,
        [Symbol(triggerId)]: 160 },
     [Symbol(kBytesRead)]: 0,
     [Symbol(kBytesWritten)]: 0 },
  connection:
   Socket {
     connecting: false,
     _hadError: false,
     _handle:
      TCP {
        reading: true,
        onread: [Function: onStreamRead],
        onconnection: null,
        _consumed: true,
        [Symbol(owner)]: [Circular] },
     _parent: null,
     _host: null,
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: true,
        ended: false,
        endEmitted: false,
        reading: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        paused: false,
        emitClose: false,
        autoDestroy: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: false,
        decoder: null,
        encoding: null },
     readable: true,
     _events:
      [Object: null prototype] {
        end: [Array],
        drain: [Array],
        timeout: [Function: socketOnTimeout],
        data: [Function: bound socketOnData],
        error: [Function: socketOnError],
        close: [Array],
        resume: [Function: onSocketResume],
        pause: [Function: onSocketPause] },
     _eventsCount: 8,
     _maxListeners: undefined,
     _writableState:
      WritableState {
        objectMode: false,
        highWaterMark: 16384,
        finalCalled: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        destroyed: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        corked: 0,
        sync: false,
        bufferProcessing: false,
        onwrite: [Function: bound onwrite],
        writecb: null,
        writelen: 0,
        bufferedRequest: null,
        lastBufferedRequest: null,
        pendingcb: 0,
        prefinished: false,
        errorEmitted: false,
        emitClose: false,
        autoDestroy: false,
        bufferedRequestCount: 0,
        corkedRequestsFree: [Object] },
     writable: true,
     allowHalfOpen: true,
     _sockname: null,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      Server {
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 40000,
        _connectionKey: '6::::5000',
        [Symbol(IncomingMessage)]: [Function],
        [Symbol(ServerResponse)]: [Function],
        [Symbol(asyncId)]: 17 },
     _server:
      Server {
        _events: [Object],
        _eventsCount: 2,
        _maxListeners: undefined,
        _connections: 1,
        _handle: [TCP],
        _usingWorkers: false,
        _workers: [],
        _unref: false,
        allowHalfOpen: true,
        pauseOnConnect: false,
        httpAllowHalfOpen: false,
        timeout: 120000,
        keepAliveTimeout: 5000,
        maxHeadersCount: null,
        headersTimeout: 40000,
        _connectionKey: '6::::5000',
        [Symbol(IncomingMessage)]: [Function],
        [Symbol(ServerResponse)]: [Function],
        [Symbol(asyncId)]: 17 },
     timeout: 120000,
     parser:
      HTTPParser {
        '0': [Function: parserOnHeaders],
        '1': [Function: parserOnHeadersComplete],
        '2': [Function: parserOnBody],
        '3': [Function: parserOnMessageComplete],
        '4': [Function: bound onParserExecute],
        _headers: [],
        _url: '',
        socket: [Circular],
        incoming: [IncomingMessage],
        outgoing: null,
        maxHeaderPairs: 2000,
        _consumed: true,
        onIncoming: [Function: bound parserOnIncoming],
        parsingHeadersStart: 0,
        [Symbol(isReused)]: false },
     on: [Function: socketOnWrap],
     _paused: false,
     _httpMessage: [Circular],
     [Symbol(asyncId)]: 157,
     [Symbol(lastWriteQueueSize)]: 0,
     [Symbol(timeout)]:
      Timeout {
        _called: false,
        _idleTimeout: 120000,
        _idlePrev: [TimersList],
        _idleNext: [TimersList],
        _idleStart: 8929,
        _onTimeout: [Function: bound ],
        _timerArgs: undefined,
        _repeat: null,
        _destroyed: false,
        [Symbol(unrefed)]: true,
        [Symbol(asyncId)]: 173,
        [Symbol(triggerId)]: 160 },
     [Symbol(kBytesRead)]: 0,
     [Symbol(kBytesWritten)]: 0 },
  _header: null,
  _onPendingData: [Function: bound updateOutgoingData],
  _sent100: false,
  _expect_continue: false,
  req:
   IncomingMessage {
     _readableState:
      ReadableState {
        objectMode: false,
        highWaterMark: 16384,
        buffer: BufferList { head: null, tail: null, length: 0 },
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: null,
        ended: true,
        endEmitted: false,
        reading: false,
        sync: true,
        needReadable: false,
        emittedReadable: false,
        readableListening: false,
        resumeScheduled: false,
        paused: true,
        emitClose: true,
        autoDestroy: false,
        destroyed: false,
        defaultEncoding: 'utf8',
        awaitDrain: 0,
        readingMore: true,
        decoder: null,
        encoding: null },
     readable: true,
     _events:
      [Object: null prototype] { end: [Function: resetHeadersTimeoutOnReqEnd] },
     _eventsCount: 1,
     _maxListeners: undefined,
     socket:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [TCP],
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        readable: true,
        _events: [Object],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        timeout: 120000,
        parser: [HTTPParser],
        on: [Function: socketOnWrap],
        _paused: false,
        _httpMessage: [Circular],
        [Symbol(asyncId)]: 157,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]:
         Timeout {
           _called: false,
           _idleTimeout: 120000,
           _idlePrev: [TimersList],
           _idleNext: [TimersList],
           _idleStart: 8929,
           _onTimeout: [Function: bound ],
           _timerArgs: undefined,
           _repeat: null,
           _destroyed: false,
           [Symbol(unrefed)]: true,
           [Symbol(asyncId)]: 173,
           [Symbol(triggerId)]: 160 },
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0 },
     connection:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [TCP],
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        readable: true,
        _events: [Object],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        timeout: 120000,
        parser: [HTTPParser],
        on: [Function: socketOnWrap],
        _paused: false,
        _httpMessage: [Circular],
        [Symbol(asyncId)]: 157,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]:
         Timeout {
           _called: false,
           _idleTimeout: 120000,
           _idlePrev: [TimersList],
           _idleNext: [TimersList],
           _idleStart: 8929,
           _onTimeout: [Function: bound ],
           _timerArgs: undefined,
           _repeat: null,
           _destroyed: false,
           [Symbol(unrefed)]: true,
           [Symbol(asyncId)]: 173,
           [Symbol(triggerId)]: 160 },
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0 },
     httpVersionMajor: 1,
     httpVersionMinor: 1,
     httpVersion: '1.1',
     complete: true,
     headers:
      { host: 'localhost:5000',
        connection: 'keep-alive',
        accept: 'application/json, text/plain, */*',
        origin: 'http://localhost:3000',
        authorization:
         'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTljMzgzYWVkOGE5YjUwYzBkNTgwYjAiLCJ1c2VybmFtZSI6IndhcmthcmV5cyIsImVtYWlsSWQiOiJ5c3dhcmthcmVAZ21haWwuY29tIiwiaWF0IjoxNTg4MDY5ODcwLCJleHAiOjE1ODgxNTYyNzB9.ujrmqmRdk7Smo_mWYt3he4KttHVNVXRkAPPO1G5gawc',
        'sec-fetch-dest': 'empty',
        'user-agent':
         'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36 OPR/67.0.3575.137',
        'sec-fetch-site': 'same-site',
        'sec-fetch-mode': 'cors',
        referer: 'http://localhost:3000/',
        'accept-encoding': 'gzip, deflate, br',
        'accept-language': 'en-US,en;q=0.9',
        'if-none-match': 'W/"24-4EhGebR8i3xhfMe+FV24xWlMFWs"' },
     rawHeaders:
      [ 'Host',
        'localhost:5000',
        'Connection',
        'keep-alive',
        'Accept',
        'application/json, text/plain, */*',
        'Origin',
        'http://localhost:3000',
        'Authorization',
        'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI1ZTljMzgzYWVkOGE5YjUwYzBkNTgwYjAiLCJ1c2VybmFtZSI6IndhcmthcmV5cyIsImVtYWlsSWQiOiJ5c3dhcmthcmVAZ21haWwuY29tIiwiaWF0IjoxNTg4MDY5ODcwLCJleHAiOjE1ODgxNTYyNzB9.ujrmqmRdk7Smo_mWYt3he4KttHVNVXRkAPPO1G5gawc',
        'Sec-Fetch-Dest',
        'empty',
        'User-Agent',
        'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/80.0.3987.163 Safari/537.36 OPR/67.0.3575.137',
        'Sec-Fetch-Site',
        'same-site',
        'Sec-Fetch-Mode',
        'cors',
        'Referer',
        'http://localhost:3000/',
        'Accept-Encoding',
        'gzip, deflate, br',
        'Accept-Language',
        'en-US,en;q=0.9',
        'If-None-Match',
        'W/"24-4EhGebR8i3xhfMe+FV24xWlMFWs"' ],
     trailers: {},
     rawTrailers: [],
     aborted: false,
     upgrade: false,
     url: '/is-user-logged-in',
     method: 'GET',
     statusCode: null,
     statusMessage: null,
     client:
      Socket {
        connecting: false,
        _hadError: false,
        _handle: [TCP],
        _parent: null,
        _host: null,
        _readableState: [ReadableState],
        readable: true,
        _events: [Object],
        _eventsCount: 8,
        _maxListeners: undefined,
        _writableState: [WritableState],
        writable: true,
        allowHalfOpen: true,
        _sockname: null,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Server],
        _server: [Server],
        timeout: 120000,
        parser: [HTTPParser],
        on: [Function: socketOnWrap],
        _paused: false,
        _httpMessage: [Circular],
        [Symbol(asyncId)]: 157,
        [Symbol(lastWriteQueueSize)]: 0,
        [Symbol(timeout)]:
         Timeout {
           _called: false,
           _idleTimeout: 120000,
           _idlePrev: [TimersList],
           _idleNext: [TimersList],
           _idleStart: 8929,
           _onTimeout: [Function: bound ],
           _timerArgs: undefined,
           _repeat: null,
           _destroyed: false,
           [Symbol(unrefed)]: true,
           [Symbol(asyncId)]: 173,
           [Symbol(triggerId)]: 160 },
        [Symbol(kBytesRead)]: 0,
        [Symbol(kBytesWritten)]: 0 },
     _consuming: false,
     _dumped: false,
     next: [Function: next],
     baseUrl: '/users',
     originalUrl: '/users/is-user-logged-in',
     _parsedUrl:
      Url {
        protocol: null,
        slashes: null,
        auth: null,
        host: null,
        port: null,
        hostname: null,
        hash: null,
        search: null,
        query: null,
        pathname: '/is-user-logged-in',
        path: '/is-user-logged-in',
        href: '/is-user-logged-in',
        _raw: '/is-user-logged-in' },
     params: {},
     query: {},
     res: [Circular],
     body: {},
     _passport: { instance: [Authenticator] },
     route:
      Route { path: '/is-user-logged-in', stack: [Array], methods: [Object] },
     user: Promise { <pending> },
     authInfo:
      { _id: '5e9c383aed8a9b50c0d580b0',
        username: 'warkareys',
        emailId: 'yswarkare@gmail.com',
        iat: 1588069870,
        exp: 1588156270 } },
  locals: [Object: null prototype] {},
  [Symbol(isCorked)]: false,
  [Symbol(outHeadersKey)]:
   [Object: null prototype] {
     'x-powered-by': [ 'X-Powered-By', 'Express' ],
     'access-control-allow-origin': [ 'Access-Control-Allow-Origin', '*' ] } }