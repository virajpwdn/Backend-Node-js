# Node.js Notes

### Key Concepts in Node.js

- **V8 Engine**: Powers Node.js by compiling and executing JavaScript code.
  - Converts JavaScript into machine code through JIT (Just In Time) compilation.
  - Executes synchronous and asynchronous tasks efficiently.

- **Libuv**: A library that enables Node.js to handle asynchronous I/O operations.
  - Manages the event loop and provides an abstraction for OS-level operations.
  - Handles timers, file systems, threads, and network requests.

- **Event Loop**: Central to Node.js's non-blocking I/O.
  - Executes callbacks in phases (e.g., timers, I/O callbacks, idle/prepare, poll, check, close).

- **Garbage Collection**: Automatically reclaims memory for unused objects.

---

### Understanding Synchronous and Asynchronous Code Execution

- **Execution Flow**: Synchronous code executes line-by-line, while asynchronous code is offloaded to `libuv` for parallel processing.

- **Key Steps in Code Execution**:
  1. Variables (e.g., `a`, `b`) are allocated memory in the heap.
  2. Synchronous code is processed by the V8 engine.
  3. Asynchronous code is offloaded to `libuv` and executed simultaneously with synchronous code.
  4. Outputs are returned as soon as tasks are completed, usually synchronous tasks first.
  5. Once a function completes its role, it is removed from the call stack, and garbage collection reclaims memory.

#### Example:
```javascript
const fs = require('fs');
const https = require('https');

console.log("hello world"); 

let a = 10786;
let b = 20986;

https.get('https://dummyjson.com/products/1', (res) => {
    console.log("fetched data successfully");
});

setTimeout(() => {
    console.log("Set timeout called after 5 seconds");
}, 5000);

fs.readFile('nameste.txt', 'utf8', (err, data) => {
    console.log("file data: ", data);
});

function multiply(x, y) {
    const result = x * y;
    return result;
}

var c = multiply(a, b);
console.log(c);
```

---

### What Happens Inside the V8 Engine?

1. **Parsing**:
   - Code undergoes lexical analysis, generating tokens.
   - Syntax analysis creates an Abstract Syntax Tree (AST).

2. **Compilation**:
   - V8 uses JIT (Just In Time) Compilation, combining interpretation and compilation.
   - **Ignition Interpreter**: Converts AST into bytecode.
   - **Turbofan Compiler**: Optimizes repeated (hot) code into machine code.

3. **Deoptimization**:
   - Occurs when assumptions about code (e.g., variable types) change.
   - Example: If an optimized function expects numbers but receives strings, it is deoptimized and reprocessed.

4. **Garbage Collection**:
   - Algorithms like **Orinoco**, **Oilpan**, **Scavenger**, and **McCompact** clean up memory.
   - Uses the Mark-and-Sweep algorithm to reclaim memory from unused objects.

#### Additional Notes:
- Inline caching and copy elision optimize performance.
- AST Explorer (https://astexplorer.net) visualizes ASTs.

---

### Synchronous vs. Asynchronous Functions

- **Synchronous Functions**:
  - Block the main thread, causing delays.
  - Example: `crypto.pbkdf2Sync()`.

- **Asynchronous Functions**:
  - Allow non-blocking execution by offloading tasks to `libuv`.
  - Example: `crypto.pbkdf2()`.

#### Example:
```javascript
const crypto = require('crypto');
console.log("hello");

var a = 109878;
var b = 20986;

crypto.pbkdf2Sync("password", "salt", 500000, 50, "sha512");
console.log("password 1 is encrypted successfully");

crypto.pbkdf2('password', 'salt', 100000, 50, 'sha512', (err, key) => {
    console.log("password 2 encrypted successfully");
});

function multiply(x, y) {
    const result = x * y;
    return result;
}

console.log(multiply(a, b));
```

---

### Node.js: Detailed Explanation of Asynchronous Handling

- **Callbacks and Global Execution Context**:
  - Callbacks from `libuv` are executed only after the global execution context is cleared.
  - The global execution context is removed from the call stack after all synchronous code is executed.

- **Libuv's Role in Async Execution**:
  - Handles I/O, timers, and threads, enabling Node.js's non-blocking nature.
  - Schedules callbacks for execution once synchronous code is completed.

#### Example:
```javascript
setTimeout(() => {
    console.log("Callback executed after synchronous code");
}, 1000);

console.log("This will execute first");
```

---

### Optimizations and Challenges

- **JIT Compilation**:
  - Combines the speed of compilation with the error-checking benefits of interpretation.

- **Turbofan Compiler Limitations**:
  - Works on assumptions (e.g., variable types).
  - Deoptimization occurs if assumptions are invalidated.

- **Garbage Collection**:
  - Critical for memory management.
  - Various algorithms ensure efficient cleanup.

- **Historical Notes**:
  - Earlier V8 compiler **Crankshaft** is no longer used.

---

### Summary

- **Node.js Efficiency**: Combines V8 engine and `libuv` to handle both sync and async tasks.
- **Avoid Blocking Code**: Use async functions to maintain non-blocking behavior.
- **V8 Internals**: JIT compilation, garbage collection, and optimization make it efficient and powerful.
- **Best Practices**:
  - Avoid synchronous functions in production.
  - Leverage async capabilities for better performance.
