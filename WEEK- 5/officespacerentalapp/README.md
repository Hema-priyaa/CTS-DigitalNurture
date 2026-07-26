EXERCISE - 10
1. Define JSX
   
JSX stands for JavaScript XML and is a syntax extension for JavaScript.
It allows developers to write HTML-like code inside JavaScript.
JSX makes React code easier to read and write.
It is converted into React.createElement() by Babel before execution.

2. Explain about ECMA Script
   
ECMAScript (ES) is the standard on which JavaScript is based.
It defines the syntax, features, and behavior of JavaScript.
ES6 introduced features like let, const, classes, and arrow functions.
React applications commonly use ES6 and later versions.

3. Explain React.createElement()

React.createElement() is a React method used to create React elements.
It takes the element type, properties, and child elements as arguments.
JSX is automatically converted into React.createElement() by Babel.
It creates a virtual representation of the UI.

4. Explain how to create React nodes with JSX
   
React nodes are created by writing HTML-like tags in JSX.
JSX elements are enclosed within a single parent element.
JavaScript values can be inserted using curly braces {}.
The JSX code is compiled into React elements before rendering.

5. Define how to render JSX to DOM

JSX is rendered to the browser using ReactDOM.createRoot() and root.render().
The render() method displays the JSX inside a DOM element.
The root element is usually a <div> with id "root".
React updates the DOM efficiently whenever data changes.

6. Explain how to use JavaScript expressions in JSX
   
JavaScript expressions are written inside curly braces {} in JSX.
They can display variables, calculations, or function results.
Only expressions can be used, not statements like if or for.
Example: <h1>{name}</h1> displays the value of name.

7. Explain how to use inline CSS in JSX
Inline CSS in JSX is written using the style attribute.
The style attribute accepts a JavaScript object.
CSS property names are written in camelCase, such as backgroundColor.
Example: <h1 style={{ color: 'red', fontSize: '20px' }}>Hello</h1>.

OUTPUT:
<img width="1133" height="962" alt="Screenshot 2026-07-21 205522" src="https://github.com/user-attachments/assets/f9ef6314-ce46-4e62-a6e3-3931d349ad4e" />
<img width="805" height="901" alt="Screenshot 2026-07-21 205532" src="https://github.com/user-attachments/assets/4ac5a677-5c36-4ea3-96e5-b417da6593b9" />




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
