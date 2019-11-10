# global-winery

> global-winery for grape, a global frontend

[![NPM](https://img.shields.io/npm/v/global-winery.svg)](https://www.npmjs.com/package/global-winery) \
 [![JavaScript Style Guide](https://img.shields.io/badge/Code%20Style-Prettier-orange)](https://standardjs.com)

![License](https://img.shields.io/npm/l/global-winery)

![Issues](https://img.shields.io/github/issues/SammyRobensParadise/global-winery)

![minified_size](https://img.shields.io/bundlephobia/min/global-winery)

[sammyrp.com/global-winery](https://sammyrp.com/global-winery)

## Warning

<b>This Library is currently incomplete and is in the process of being built</b>

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

Directions: \
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

[See all icons](https://sammyrp.com/global-winery/#icons)

## General Icons

```jsx
Icon.propTypes = {
  type: PropTypes.element,
  hoverable: PropTypes.bool,
  circle: PropTypes.bool,
  square: PropTypes.bool,
  color: PropTypes.string,
  event: PropTypes.func,
  children: PropTypes.component
}
```

## Icon Child

```jsx
CodeBlock.propTypes = {
  color: PropTypes.string
}
```

## Usage

```jsx
.
.
.
render(){
  const children = <CodeBlock color={'#000000'} />
  return(
    <Icon
      type={children}
      event={()  => alert('🚨 watch out!')}
      circle
      color={'#adadad'}
    />
  )
}
```

## Icon List

1. Code Block
2. Refresh Arrow
3. Back Arrow
4. Forward Arrow
5. Export and Share
6. More Dots
7. Star
8. Exit Icon
9. Home Icon
10. Add Icon
11. Profile Badge Icon
12. InfoIcon
13. FullScreenIcon
14. DownloadIcon
15. ForkIcon
16. DataIcon
17. CodeEditorIcon
18. FileIcon
19. CodepenIcon
20. TextboxIcon
21. ConsoleIcon
22. PhotovideoIcon
23. DiagramIcon

# More To Come... :)

## Creator

[Webiste](https://sammyrp.com) \
[Portfolio](https://sammy.world)

## License

MIT © [SammyRobensParadise](https://github.com/SammyRobensParadise)
