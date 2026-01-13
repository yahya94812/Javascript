**You:**

explain the list of node apis

* * *

**ChatGPT:**

In Node.js, **“Node APIs” usually means the built-in (core) modules** that Node provides out of the box—no `npm install` needed. Below is a **clear, categorized list of the main Node.js core APIs**, with what each one is used for.

* * *

## 1. File System & Paths

Used for working with files and directories.

* **`fs`**  
    Read/write files, create/delete directories, watch files, streams for large files.
    
* **`path`**  
    Safely handle file paths (`join`, `resolve`, `basename`, OS-independent).
    
* **`fs/promises`**  
    Promise-based version of `fs` (modern async/await style).
    

* * *

## 2. Networking & Web

Used for servers, clients, and networking.

* **`http`**  
    Create HTTP servers and clients.
    
* **`https`**  
    Same as `http` but with TLS/SSL.
    
* **`net`**  
    Low-level TCP servers/clients.
    
* **`dgram`**  
    UDP (datagram) sockets.
    
* **`http2`**  
    HTTP/2 protocol support.
    

* * *

## 3. Streams & Buffers

Used for handling large or continuous data efficiently.

* **`stream`**  
    Readable, Writable, Duplex, Transform streams.
    
* **`buffer`**  
    Handle raw binary data (important for networking, files).
    
* **`zlib`**  
    Compression (gzip, deflate, brotli).
    

* * *

## 4. Process & OS

Used to interact with the operating system and Node process.

* **`process`**  
    Environment variables, arguments, exit codes, events.
    
* **`os`**  
    System info: CPU, memory, platform, uptime.
    
* **`child_process`**  
    Run external commands (`exec`, `spawn`, `fork`).
    
* **`worker_threads`**  
    True multithreading for CPU-heavy tasks.
    

* * *

## 5. Events & Async Control

Used for event-driven and async behavior.

* **`events`**  
    EventEmitter class (core of Node’s event model).
    
* **`timers`**  
    `setTimeout`, `setInterval`, `setImmediate`.
    
* **`async_hooks`**  
    Track async resources (advanced debugging/perf).
    

* * *

## 6. Security & Cryptography

Used for encryption, hashing, and secure data.

* **`crypto`**  
    Hashing, HMAC, encryption/decryption, random bytes.
    
* **`tls`**  
    Secure TCP connections.
    
* **`constants`**  
    System and crypto-related constants.
    

* * *

## 7. Utilities & Helpers

General-purpose helpers.

* **`util`**  
    Promisify callbacks, debugging helpers, type checks.
    
* **`assert`**  
    Simple assertion testing.
    
* **`string_decoder`**  
    Decode buffers into strings safely.
    

* * *

## 8. Modules & Packaging

Used for module handling.

* **`module`**  
    Low-level module system internals.
    
* **`require` / ES `import`**  
    Load modules (CommonJS / ES Modules).
    

* * *

## 9. URL & Data Parsing

Used for structured data and URLs.

* **`url`**  
    Parse and format URLs.
    
* **`querystring`**  
    Parse query parameters (older, mostly replaced by `URLSearchParams`).
    
* **`punycode`**  
    Unicode domain name encoding (legacy).
    

* * *

## 10. Debugging & Performance

Used to analyze and debug applications.

* **`inspector`**  
    Connect to Chrome DevTools.
    
* **`perf_hooks`**  
    Performance measurements (timing, marks).
    
* **`trace_events`**  
    Low-level tracing.
    

* * *

## 11. CLI & Environment

Used for building command-line tools.

* **`readline`**  
    Interactive CLI input/output.
    
* **`tty`**  
    Terminal-related utilities.
    

* * *

## How this fits interview-wise

Since you’re preparing for **interviews and system-level understanding**, focus especially on:

* `fs`, `path`
    
* `http` / `https`
    
* `stream`, `buffer`
    
* `event`, `process`
    
* `child_process`, `worker_threads`
    

If you want, I can:

* Explain **which Node APIs are most used in backend interviews**
    
* Give **real-world examples** (e.g., how Express uses `http`)
    
* Compare **Node APIs vs browser APIs**
    
* Map APIs to **performance concepts (latency, throughput, memory)**