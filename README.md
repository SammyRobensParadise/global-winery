# global-winery

> global-winery for grape, a global frontend

[![NPM](https://img.shields.io/npm/v/global-winery.svg)](https://www.npmjs.com/package/global-winery) [![JavaScript Style Guide](https://img.shields.io/badge/Code%20Style-Prettier-orange)](https://standardjs.com)

## Install

```bash
npm install --save global-winery
```

## Usage

```jsx
import React, { Component } from 'react'

import Button from 'global-winery'

class Example extends Component {
  render() {
    return (
      <Button
        text='Sign Up'
        small={true}
        event={() => alert('Button Clicked!')}
        hover={true}
      />
    )
  }
}
```
## Running Locally

```bash
git clone https://github.com/SammyRobensParadise/global-winery.git
```
```bash
cd raindrop && npm start
```
```bash
cd raindrop/example && npm start
```
## What is available: 

1. [Buttons](#buttons)
2. [Chevrons](#chevrons)
3. [TextInputs](#text_input)
4. [Icons](#icons)
<br>

<a id="buttons">
</a>

# Buttons

## Button

```jsx
  Button.propTypes = {
    text: PropTypes.string,
    hover: PropTypes.bool,
    invert: PropTypes.bool,
    small: PropTypes.bool,
    dropShadow: PropTypes.bool,
    event: PropTypes.func
  }
```
## MultiButton

```jsx
  MultiButton.propTypes = {
    textLeft: PropTypes.string,
    textRight: PropTypes.string,
    rightEvent: PropTypes.func,
    leftEvent: PropTypes.func,
    leftFocus: PropTypes.bool,
    rightFocus: PropTypes.bool,
    dropShadow: PropTypes.bool
  }
```

<a id="chevrons">
</a>

# Chevrons

## Chevron

```jsx
  Chevron.propTypes = {
    direction: PropTypes.string,
    color: PropTypes.string
  }
```
Directions:  \
UP, DOWN, LEFT, RIGHT

<a id="text_input">
</a>

# Text Inputs

## Fixed Input

```jsx
  FixedInput.propTypes = {
    type: PropTypes.string,
    size: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number
  }
```
## Single Input  

```jsx
  SingleInput.propTypes = {
    type: PropTypes.string,
    size: PropTypes.number,
    scrollAndResize: PropTypes.bool
  }
```
<a id="icons">
</a>

# Icons

## General Icons

```jsx
  Icon.propTypes = {
    type: PropTypes.element,
    hoverable: PropTypes.bool,
    circle: PropTypes.bool,
    square: PropTypes.bool,
    color: PropTypes.string,
    event: PropTypes.func
  }
```
## Code Block
```jsx
  CodeBlock.propTypes = {
    color: PropTypes.string
  }
```

# More To Come... :)
## Creator


[Webiste](https://sammyrp.com) \
[Portfolio](https://sammy.world)

## License

MIT © [SammyRobensParadise](https://github.com/SammyRobensParadise)
