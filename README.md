# Aphrodite React
### React UI Library from ingresse.com

A front-end library with Ingresse's styles, using `React` 16.

---

## Install
You can install with Yarn or NPM in your App Project, but using GitHub repository address as source:
```
yarn add https://github.com/ingresse/aphrodite-react.git
```

Include Aphrodite Components inside your React Application.

`src/components/index.js`:
```jsx
export {
    Button,
    Segment,
} from 'aphrodite-react';
```

`src/App.jsx`:
```jsx
import {
    Button,
    Segment,
} from './components';

function App() {
    function handleClick(evt) {
        console.log('button click', evt);
    }

    return (
        <Segment
            textAlign="center">
            <Button onClick={handleClick}>
                Aphrodite Button
            </Button>
        </Segment>
    );
}

export default App;
```

---


## [Documentation](http://ingresse.github.io/aphrodite)

We try, but isn't the most complete and readeable documentation (yet):

**[http://ingresse.github.io/aphrodite-react](http://ingresse.github.io/aphrodite-react)**


---


## Development
```
yarn dev
```

---


## Build
```
yarn build
```
Distribution files will be in `dist` folder.

---
