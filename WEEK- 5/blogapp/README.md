Exercise - 4:

1. Explain the need and benefits of Component Life Cycle:
   
The component life cycle helps React manage a component from creation to removal.
It allows developers to perform actions at different stages of a component.
It improves performance by updating only necessary parts of the UI.
It is useful for loading data, updating content, and cleaning up resources.

2. Identify various life cycle hook methods
   
Mounting: constructor(), render(), componentDidMount()
Updating: shouldComponentUpdate(), render(), componentDidUpdate()
Unmounting: componentWillUnmount()
Error Handling: componentDidCatch()

3. List the sequence of steps in rendering a component
   
Mounting: constructor() → render() → componentDidMount()
Updating: shouldComponentUpdate() → render() → componentDidUpdate()
Unmounting: componentWillUnmount()
These methods are executed automatically during the component's life cycle.

OUTPUT:

<img width="696" height="848" alt="Screenshot 2026-07-17 085049" src="https://github.com/user-attachments/assets/adbefa4d-f234-47a4-87fd-7b3c8c4f4e0a" />

<img width="1633" height="872" alt="Screenshot 2026-07-17 085104" src="https://github.com/user-attachments/assets/cd970f59-677b-47d6-a557-7a196b04487c" />

<img width="1906" height="916" alt="Screenshot 2026-07-17 085122" src="https://github.com/user-attachments/assets/b13202fc-9ef0-4d4b-8076-158dbf932e88" />

<img width="1917" height="892" alt="Screenshot 2026-07-17 085133" src="https://github.com/user-attachments/assets/5c9caacf-cfa5-44c9-974a-c4a453b46171" />



# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
