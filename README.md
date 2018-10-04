# Aphrodite React
### UI framework from ingresse.com

A front-end framework with Ingresse styles, using `React` 16.

_

## Install
You can install with Yarn or NPM in your App Project, but using GitHub repository address as source:
```
yarn add https://github.com/ingresse/aphrodite-react.git
```

Include Aphrodite Components inside your React Application:

```jsx
...
import { Button } from 'aphrodite-react';

...
    render() {
        return (
            <Button onClick={this.handleClick}>Aphrodite Button</Button>
        );
    }
...
```
_


## [Documentation](http://ingresse.github.io/aphrodite)

We try, but isn't the most complete and readeable documentation (yet):

**[http://ingresse.github.io/aphrodite-react](http://ingresse.github.io/aphrodite-react)**

_

## Development
```
yarn dev
```

_


## Build
```
yarn build
```
Distribution files will be in `dist` folder.

_


## Dev Note
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
