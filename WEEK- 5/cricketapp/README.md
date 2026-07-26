Exercise - 9:

1. List the features of ES6
   
ES6 introduced let and const for variable declaration.
It supports classes, modules, and inheritance.
It introduced arrow functions for shorter function syntax.
It also includes template literals, promises, maps, and sets.

2. Explain JavaScript let 

let is used to declare variables in JavaScript.
It has block scope, so it is accessible only within the block where it is declared.
Its value can be changed after declaration.
It prevents redeclaration within the same scope.

3. Identify the differences between var and let 

var has function scope, while let has block scope.
var can be redeclared, but let cannot.
let is safer because it reduces scope-related errors.
let was introduced in ES6 to replace many uses of var.

4. Explain JavaScript const 

const is used to declare constant variables.
Its value cannot be reassigned after initialization.
It also has block scope like let.
It must be initialized at the time of declaration.

5. Explain ES6 class fundamentals 

ES6 introduced the class keyword to create objects.
A class contains properties and methods.
The constructor() method initializes object values.
Objects are created using the new keyword.

6. Explain ES6 class inheritance 

Inheritance allows one class to acquire the properties of another class.
The extends keyword is used to inherit a class.
The super() method calls the parent class constructor.
It promotes code reusability and reduces duplication.

7. Define ES6 arrow functions 

Arrow functions provide a shorter syntax for writing functions.
They are written using the => operator.
They automatically inherit this from the surrounding scope.
They make code cleaner and easier to read.

8. Identify Set() and Map() 

Set is a collection that stores only unique values.
Map stores data as key-value pairs.
Both preserve the insertion order of elements.
They provide efficient methods for adding, deleting, and accessing data.

OUTPUT:

when flag == true:
<img width="1917" height="932" alt="Screenshot 2026-07-17 092852" src="https://github.com/user-attachments/assets/1fc0898f-287b-4b7b-9b24-a27e14bb00c3" />

when flag == false:
<img width="1835" height="887" alt="Screenshot 2026-07-17 092737" src="https://github.com/user-attachments/assets/50b57bbf-1bd1-4d85-92ca-e8ce3476abf3" />




# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
