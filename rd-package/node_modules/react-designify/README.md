
# react-designify

React Designify contains foundational React UI component libraries for shipping new features faster.

React Designify is a comprehensive library of tailwind components.

React Designify is our library of "unstyled" components and low-level hooks. With Base, you gain complete control over your app's CSS and accessibility features.

React Designify is a collection of Tailwind CSS utilities to help you rapidly lay out custom designs.

React Designify is easier to understand and use than any other React UI component libraries

Vite must be included in your project


## Create vite app using React framework
to create vite app run the following command

```bash
 npm create vite@latest
```

create vite-project in terminal

```bash
  ? Project name: » vite-project
```

select framework

```bash
   Select a framework: » React
```

select variant

```bash
   Select a variant: » Javascript
```
then change the directory

```bash
   cd vite-project
```
after that you have to install npm using terminal

```bash
   npm i
```


## Installation

Install react-designify with npm

```bash
  npm i react-designify
```
    
## Usage/Examples
Here is an example of a basic app using react-designify Button component:

At first you have to import our css in main.jsx file
```javascript
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import "react-designify/styles/output.css"
import "react-designify/styles/extra.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
```
After that you have to import our Button component in your react component from react-designify components
```javascript
import React from 'react'
import {Button} from "react-designify/components/button"
function App() {
  return (
      <Button text="Submit" type="dark" />
  )
}
```


## Running the project

To run the project, run the following command

```bash
  npm run dev
```


# Hi, I'm Chandan payra! 👋
https://github.com/chandanpayra980034


