# Node.js Notes

## Timeline of Node.js
- **2009**: Node.js was created by Ryan Dahl. Frustrated with the inability to use JavaScript for backend, he developed Node.js to enable JavaScript on the server side.
- **2009**: Node.js initially supported **MacOS** and **Linux**.
- **2010**: WebOS integrated Node.js.
- **2012**: Joyent, a cloud computing company, hired Ryan Dahl to maintain Node.js.
- **NPM History**:
  - Isaac Schlueter developed NPM (Node Package Manager), which simplified package management for Node.js projects.
  - NPM became a critical part of the Node.js ecosystem.
- **Fork Event**: Around 2014-2015, disagreements led to the creation of **io.js** (a Node.js fork).
- **Reconciliation**: io.js merged back with Node.js under the **Node.js Foundation**, which eventually joined the **OpenJS Foundation**.
- **Today**: Node.js is maintained and improved as part of the OpenJS Foundation, with a vibrant community and corporate support.

---

## Browser vs Node.js: Global Objects and `this`

### **In the Browser**:
- The `window` object is provided by the browser and is not a part of the V8 engine.
- When we use `this` in the browser:
  - It points to the `window` object by default.

### **In Node.js**:
- There is no `window` object. Instead, Node.js has a **global object** that provides various features.
- When we use `this` in the Node.js console:
  - It does **not** point to the `global` object or a `window` object.
  - Instead, it returns an **empty object (`{}`)**.

---

## The History of `this`, `self`, and `frames`
- Initially, when JavaScript was created:
  - Developers began using `this` as a default reference to the `window` object.
  - Similarly, `self` and `frames` were used to point to `window`.
- Over time, this became a convention.
- **Standardization in 2020**:
  - A new global property, **`globalThis`**, was introduced.
  - It provides a universal way to refer to the global object:
    - Works in both browsers and Node.js.

---

## Modules in Node.js

### **Importing Modules**:
- The `require()` method is used to import other modules into the main module.  
- Syntax:  
  ```javascript
  const moduleName = require("module-name");
  ```

### **Execution of Imported Modules**:
- When a module is imported using `require()`, it is automatically **executed**.
- However:
  - Only **exports** (functions, variables, methods) explicitly defined in the module will be available for use.
  - Any unexported variables, functions, or methods remain **protected** and cannot be accessed.

### **Module Protection**:
- Node.js modules are **protected by default**:
  - Their internal variables and functions are not exposed to other modules.
  - This ensures no unintended "leaking" of data between modules.

---

# Code Layers Overview

## 1. **JavaScript**
- A high-level programming language often used for web development.  
- It is interpreted by engines like V8 in Node.js.

## 2. **High-Level Code**
- Code written in languages such as JavaScript, C++, and Java.  
- Easier for humans to understand and write.  
- Requires a compiler or interpreter to translate into lower-level code.

## 3. **Machine Code**
- A low-level representation of code that can be directly executed by a computer's processor.  
- Typically generated from high-level code through a compiler.

## 4. **Assembly**
- A low-level programming language that acts as a bridge between machine code and high-level code.  
- Provides a more human-readable representation of machine instructions.

## 5. **Binary Code**
- The lowest-level representation of code.  
- Comprises 0s and 1s and is directly understood by the hardware.

---

## **Key Insight**
- JavaScript and other high-level languages (like C++ and Java) are abstracted far away from binary code.  
- Multiple layers of translation (compilation or interpretation) are required to transform high-level instructions into binary code executed by the hardware.

---

## Exporting in Node.js

### **Three Ways to Export**:
1. `module.exports.a = 15;`
2. `module.exports = {a, b};`
3. `module.exports = [a, b];`

### **Key Note**:
- Only **one thing can be exported at a time**.

---

## Browser Features vs. JavaScript
- **DOM**: A feature of the browser, not JavaScript itself.  
- **Window**: Another browser-specific feature, not part of JavaScript.

---

## NPM (Node Package Manager)

### **Definition**:
- A tool that manages dependencies for Node.js projects.  

### **Files Created When Using NPM**:
1. `node_modules`: Contains all installed dependencies for the project.  
2. `package-lock.json`: Tracks the exact version of installed dependencies and their sub-dependencies.  

### **Steps to Use a Package**:
1. Install the package:  
   ```bash
   npm i <package-name>
   ```  
2. Import the package in your code:  
   ```javascript
   const figlet = require("figlet");
   ```  
3. Write code to use the package:  
   ```javascript
   figlet("Name", function(err, data) {
     if (err) {
       console.log("Error:", err);
       return;
     }
     console.log(data);
   });
   ```  

### **What is a Package?**:
- A package is a reusable piece of code written by someone else and uploaded to the internet for public use.

---

## REPL (Read-Evaluate-Print Loop)

### **Definition**:
- A Node.js environment for executing code interactively in the terminal.  

### **How to Use**:
1. Open the terminal and type `node` to enter REPL mode.  
2. Use REPL to explore properties, methods, and details of Node.js.  
   - Examples:  
     ```javascript
     process.cwd();       // Shows the current working directory
     process.version;     // Displays the version of Node.js
     process.argv;        // Allows passing arguments to the terminal
     ```

---

## Additional Node.js Notes

### **Strict Mode vs. Non-Strict Mode**
- **Strict Mode**:
  - Requires variables to be initialized with a data type (`let`, `const`, or `var`).
  - Initializing a variable without a data type will throw an error.
- **Non-Strict Mode**:
  - Allows variables to be initialized without a data type.
  - The code runs without errors, but it is less safe and prone to bugs.

### **What is a Module in Node.js?**
- A **module** is:
  - JavaScript code that works **independently**.
  - A **collection of code** that is separate and private.
- Modules in Node.js provide a way to encapsulate code, making it reusable and secure.

### **Node.js Modules: Key Concepts**
#### **Modules and Functions**
- In Node.js:
  - Every module is a **function**.
  - When you create a file to be exported and use it in another file:
    - Export the function or code using `module.exports`.
    - Import it in the main file using `require()`.

#### **What Happens During Exporting?**
- Example:
  ```javascript
  module.exports = { multiply };
  ```
  - The above code creates a **special function** for the module.
  - This special function is called an **IIFE** (Immediately Invoked Function Expression).

---

### **IIFE (Immediately Invoked Function Expression)**
#### **Definition**:
- An IIFE is a function that:
  - Executes immediately after being defined.
  - Provides **encapsulation** for your module code.

#### **IIFE Syntax**:
```javascript
(function() {
    // All module code goes here
})();
```

#### **Why Use IIFE?**
- It wraps all the module’s code in a **private scope**.
- Prevents variables and functions from leaking into the global scope.
- Keeps everything safe and isolated.

#### **How Node.js Keeps Variables and Functions Private**
- Variables and functions are private in modules because:
  - They are **wrapped inside an IIFE**.
  - The `require()` statement triggers this wrapping.

#### **Where Do `module` and `require` Come From?**
- They are parameters passed to the IIFE by Node.js.
- Example:
  ```javascript
  (function(module, require) {
      // Module code
  })(module.exports = {});
  ```
- **`module` and `require`** are provided by Node.js during execution.

---

### **The 5 Steps of `require()`**

Whenever you use `require('/path')`, the following steps occur:

1. **Resolving the Module**:
   - Determines the type of file being required (e.g., JSON, local file path, Node.js core module).

2. **Loading the Module**:
   - Loads the content of the file based on its type.

3. **Compiling the Module**:
   - Wraps the code inside an IIFE for encapsulation.

4. **Code Evaluation**:
   - Executes the code.
   - Handles `module.exports` to expose the module's functionality.

5. **Caching the Module**:
   - If multiple files require the same module:
     - The above steps are performed **only once**.
     - Subsequent `require` calls use the cached module.
   - **Benefits of Caching**:
     - Reduces server load.
     - Improves performance and speed.

---

### **Encapsulation**
#### **Definition**:
- **Encapsulation** is a programming concept where the internal state and implementation details of an object or module are hidden from the outside world.
- Only specific methods or properties are exposed to interact with the object or module.

#### **Benefits of Encapsulation**:
1. **Data Protection**:
   - Prevents external interference with internal implementation details.
2. **Modularity**:
   - Makes code easier to understand and maintain.
3. **Flexibility**:
   - Allows internal implementations to change without affecting external code.

#### **Encapsulation Example in Node.js**:
```javascript
// mathModule.js
(function(module, exports) {
    const privateVariable = 42;

    function add(a, b) {
        return a + b;
    }

    module.exports = { add };
})(module);

// main.js
const math = require('./mathModule');
console.log(math.add(5, 10)); // 15
// Cannot access privateVariable directly
```
- The internal implementation (like `privateVariable`) is **hidden**, and only the `add` function is exposed.

<br>
<br>

# What happens inside v8 engine

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


<br>
<hr>
<br>
<br>

# Node.js and libuv: Internal Architecture and Event Loop

## Introduction
- **Node.js** is widely popular for its **Asynchronous I/O** (Non-Blocking I/O).  
- The asynchronous capabilities of Node.js are powered by **libuv**.  
- **libuv** manages tasks offloaded by the **V8 engine**, including event loops, callback queues, and thread pools.

---

## Key Components of libuv
1. **Event Loop**:
   - A critical part of libuv that checks if the **main thread** is empty.  
   - Only sends callbacks to the **call stack** when it is empty.

2. **Callback Queues**:
   - Stores callbacks waiting to be executed in their respective queues.

3. **Thread Pool**:
   - Contains **4 threads by default**, which handle async tasks requiring significant processing.  
   - Can be resized by modifying `UV_THREADPOOL_SIZE`.

---

## Event Loop Phases
The **event loop** runs in a cycle consisting of multiple phases. The main phases are:
1. **Timers Phase**:
   - Executes `setTimeout` and `setInterval` callbacks.

2. **Poll Phase**:
   - Executes most callbacks, such as I/O, API calls, and incoming connections.

3. **Check Phase**:
   - Executes `setImmediate()` callbacks.

4. **Close Phase**:
   - Handles cleanup operations for tasks such as closing sockets.

### Additional Phases:
5. **Pending Callbacks Phase**:
   - Stores callbacks when the callback queue exceeds its limit.
   - These callbacks are processed later when the queue has space.

6. **Idle and Prepare Phase**:
   - Used internally by Node.js.

---

## Priority Handling: The Inner Loop
Before entering any major phase, the event loop performs **priority checks**:
1. **`process.nextTick()` Callbacks**:
   - Stored in their own priority queue inside the callback queue.
   - Always executed before moving to the next phase.

2. **Promise Callbacks**:
   - Also handled in a priority queue before any phase.

This **inner loop** ensures that high-priority tasks are executed promptly.

---

## Behavior of the Event Loop
- **Semi-Infinite Loop**:
  - The event loop pauses at the **poll phase** when the call stack is empty and waits for incoming events.
  - Resumes from the poll phase when an event occurs.
  
- **One Tick**:
  - A single cycle of the event loop is called a "tick."

---

## Thread Pools in libuv
- Thread pools contain 4 threads by default.  
- Threads handle **heavy processing tasks**, such as:
  - **File System Operations** (`fs`)
  - **DNS Lookups**
  - **Crypto Functions**
  - **User-Defined Input**

- **Thread Allocation**:
  - If all threads are busy, new tasks wait until a thread becomes available.  
  - Only tasks requiring significant processing are assigned a dedicated thread.

---

## Timers and Socket Handling
- **Timeout Handling**:
  - The event loop calculates timeouts for `setTimeout` tasks and processes them accordingly.

- **Socket Management**:
  - Sockets are required for handling **incoming connections** (e.g., TCP/IP connections).  
  - Socket descriptors (also called file descriptors) are used but are unrelated to actual files.

- **Efficient Socket Handling**:
  - Unlike thread-per-connection models, Node.js leverages the operating system for **efficient socket management**:
    - **Epoll (Linux)** and **Kqueue (macOS)**:
      - Scalable I/O notification mechanisms that manage multiple socket descriptors.
      - Notify libuv of events, which are processed through the event loop.

---

## Data Structures Used
1. **Epoll**:
   - Utilizes a **Red-Black Tree** for event handling.
2. **Timers Queue**:
   - Managed using a **Min-Heap**.

---

## Summary of Key Concepts
### **V8 Engine and libuv Workflow**
1. **Async Task Flow**:
   - When the V8 engine encounters an async task, it is offloaded to **libuv**.
   - Libuv processes the task using the event loop or thread pool.

2. **Blocking Operations**:
   - Avoid blocking the main thread with:
     - Synchronous methods.
     - Heavy JSON objects.
     - Complex regex or loops.

3. **Event Loop in Action**:
   - Async tasks are queued and executed based on priority and phase order.
   - Critical inner loops handle `process.nextTick()` and promises before major phases.

4. **Thread Management**:
   - Thread pool processes tasks requiring heavy computation or I/O.  
   - Tasks are queued if threads are unavailable.

---

## Learning Points
1. **Avoid Blocking the Main Thread**:
   - Minimize use of synchronous methods, large JSON objects, complex regex, and long loops.

2. **Data Structures Are Important**:
   - Understanding data structures like **Red-Black Trees** and **Min-Heaps** can optimize development.

3. **Prioritize Naming**:
   - Clear and meaningful naming enhances code readability and maintainability.

---

## Additional Reading
- **Epoll**: Efficient, scalable I/O event notification for Linux.
- **Kqueue**: Scalable I/O notification mechanism for macOS.
- **Event Emitters**: Core feature of Node.js for handling events.
- **Streams and Buffers**: Handle large data efficiently.
- **Pipes**: Enable inter-process communication.


<br>
<hr>
<br>
<br>
# Database Notes

## What is a Database?
- **Definition**: A database is an organized collection of data.
- **Purpose**: Databases allow for efficient storage, retrieval, and management of data.

---

## What is DBMS (Database Management System)?
- **Definition**: DBMS is a software that interacts with:
  - End-users
  - Applications
  - The database itself
- **Function**: It helps capture and analyze data efficiently.

---

## Types of Databases
1. **Relational Databases** (e.g., MySQL, PostgreSQL)
2. **NoSQL Databases** (e.g., MongoDB)
3. **In-memory Databases** (e.g., Redis)
4. **Distributed SQL Databases** (e.g., CockroachDB)
5. **Time-series Databases** (e.g., InfluxDB)
6. **Object-oriented Databases** (e.g., db4o)
7. **Graph Databases** (e.g., Neo4j)
8. **Hierarchical Databases** (e.g., IBM IMS)
9. **Network Databases** (e.g., IDMS)
10. **Cloud Databases** (e.g., Amazon RDS)

### Key Insights:
- Different databases serve different purposes.
- **Popular Choices in the Industry**:
  - Relational: MySQL, PostgreSQL
  - NoSQL: MongoDB

---

## SQL and RDBMS
- **SQL**: Stands for **Structured Query Language**.
- **RDBMS**: Relational Database Management System.
  - Examples: MySQL, PostgreSQL
  - Invented by **E.F. Codd**, a scientist and mathematician.
  - Based on **12 rules** (0-indexed, so often referred to as 13 rules).

### Key Founders:
- **MySQL**: Founded by Michael Widenius.
- **PostgreSQL**: Founded by Michael Stonebraker.

---

## NoSQL Databases
- **Definition**: Non-relational databases that offer flexibility in data storage.
- **Types**:
  1. Document DB
  2. Key-Value DB
  3. Graph DB
  4. Wide Column DB
  5. Multi-model DB

### MongoDB:
- **Document DB**: Stores data as JSON-like documents.
- **History**:
  - Created in **2009** by **10gen** (now renamed **MongoDB Inc.**).
  - Name "Mongo" comes from "Humongous."
- **Advantages**:
  - Flexible and developer-friendly.
  - JSON compatibility.
  - Boosts productivity.

---

## RDBMS vs NoSQL (MongoDB)
| **Feature**            | **RDBMS**                      | **MongoDB (NoSQL)**               |
|-------------------------|--------------------------------|------------------------------------|
| Data Structure          | Tables (Rows & Columns)       | Collections, Documents, Fields    |
| Schema                  | Fixed Schema                  | Flexible Schema                   |
| Data Type               | Structured Data               | Unstructured Data                 |
| Language                | SQL                           | Mongo Query Language (MQL)        |
| Relationships           | Requires Joins                | Nested Relationships              |
| Scalability             | Tough Horizontal Scaling      | Easy Horizontal & Vertical Scaling|
| Use Case                | Banking, Transaction Workloads| Real-time analytics, Big Data     |
| Example Applications    | Banking apps                 | Social Media                      |

### Key Concepts to Explore:
- **Data Normalization**: Organizing data to reduce redundancy.
- **Joins**: Combining data from multiple tables.

---

## Installing MongoDB
- Two versions:
  1. **Community Version**: Free and open to explore.
  2. **Enterprise Version**: Paid version for businesses.

### Two Deployment Methods:
1. **Self-managed**: Install and manage MongoDB on your own.
2. **Managed by MongoDB**: Hosted services provided by MongoDB.

---

## Steps to Connect to MongoDB
1. Visit the [MongoDB website](https://www.mongodb.com/).
2. Create a free **M0 cluster**.
3. Set up a **user and password**.
4. Obtain the **connection string**.
5. Install **MongoDB Compass** (a GUI for MongoDB).
6. Use `npm` to install MongoDB in your project:
   ```bash
   npm install mongodb
   
<br>
<hr>
<br>
<br>


