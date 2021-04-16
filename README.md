# Aphrodite React
### React UI Library from ingresse.com

A front-end library with Ingresse's styles, using `React` 16, based on [Emotion](https://emotion.sh).

---

## Install
You can install with Yarn or NPM in your App Project:
```
npm i --save @ingresse/aphrodite
```

Re-export the Aphrodite tools through your React application folder structure.

`src/utils/index.js`:
```js
export {
    colors,
} from '@ingresse/aphrodite';
```

`src/components/index.js`:
```js
export {
    Button,
    Container,
    Styled,
} from '@ingresse/aphrodite';
```

`src/App.jsx`:
```jsx
/* Core Packages */
import React from 'react';

/* Your Project Components */
import {
    Button,
    Container,
    Styled,
} from './components';

function App() {
    function handleClick(evt) {
        console.log('button click', evt);
    }

    return (
        <Container sm>
            <Styled
                as="section"
                textAlign="center"
                backgroundColor="mercury,crystal,0.5"
            >
                <Button
                    color="success"
                    onClick={handleClick}
                >
                    Hello World
                </Button>
            </Styled>
        </Container>
    );
}

export default App;
```

---


## [Documentation](http://ingresse.github.io/aphrodite)

We try, but isn't the most complete and readeable documentation:

**[http://ingresse.github.io/aphrodite-react](http://ingresse.github.io/aphrodite-react)**

:-)

---