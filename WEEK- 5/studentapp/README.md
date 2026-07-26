EXCERSICE – 2:

React Components:

React components are the building blocks of a user interface. They are isolated, reusable pieces of code that act like Lego bricks to build a website. Each component handles its own visual appearance and logic.
Components vs. JavaScript Functions
While both take inputs and return an output, regular JavaScript functions return data values like strings or numbers. React components specifically return JSX code, which describes visual UI elements. Components also hook into React's ecosystem to manage state and page updates.

Types of Components:

React has two main types of components: Class components and Functional components. Class components use older JavaScript ES6 class syntax and require more code setup. Functional components are simpler, modern JavaScript functions that use React Hooks to manage data.

Class Components:
Class components are older, syntax-heavy structures that extend from React.Component. They require a strict lifecycle structure and use the this keyword to access data. While still supported, modern React development has largely phased them out.

Functional Components:

Functional components are modern, lightweight JavaScript functions that return JSX. They are much easier to read, write, and test than class components. They use React Hooks to easily handle state and lifecycle events.

Component Constructor:

A constructor is a special function used only inside Class components to set up initial data. It runs automatically before the component is displayed on the screen. It is also used to bind event handlers to the component.

render() Function:

The render() method is a mandatory function inside every Class component. It tells React exactly what visual elements should be drawn on the screen. It must remain pure, meaning it only returns JSX and does not modify data.


OUTPUT:
 <img width="940" height="253" alt="image" src="https://github.com/user-attachments/assets/3cdf017e-82b2-4d7a-b641-d4d748d2d958" />



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
