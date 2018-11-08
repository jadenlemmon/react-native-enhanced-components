<div align="center">
<h1>React-Native Enhanced Components</h1>
  <div>
    <a href="https://www.npmjs.com/package/react-native-enhanced-components">
      <img alt="npm version" src="https://img.shields.io/npm/v/react-native-enhanced-components.svg?style=flat-square"></a>
    <a href="https://www.npmjs.com/package/react-native-enhanced-components">
      <img alt="weekly downloads from npm" src="https://img.shields.io/npm/dw/react-native-enhanced-components.svg?style=flat-square"></a>
    <a href="#badge">
      <img alt="code style: prettier" src="https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square"></a>
    <a href="#badge">
      <img alt="Build Status" src="https://circleci.com/gh/jlemm45/react-native-enhanced-components/tree/master.svg?style=svg"></a>
  </div>
  
</div>

`react-native-enhanced-components` provides a simple way to manage styling through your app. Out of the box several helpful higher order components are provided making it easy to apply basic layout styling to core or custom `react-native` components.

## Getting Started

`yarn add react-native-enhanced-components` or `npm i react-native-enhanced-components`

### Basic Example

Adding a margin top and overall padding of 5 to a view. The view component includes all flex styling below.

```javascript
import { Block } from 'react-native-enhanced-components'
import { Text } from 'react-native'

<Block mt={5} p={5}>
	<Text>Hello World!</Text>
</Block>
```

### Wrap your own component

Wrapping the text component with some basic styling.

```javascript
import { withStyles } from 'react-native-enhanced-components';
import { Text as RNText, StyleSheet } from 'react-native';

const textStyles = {
  center: {
    textAlign: 'center',
  },
  body: {
    color: '#ccc',
  },
  light: {
    color: '#eee',
  },
};

const Text = withStyles(RNText, textStyles);

<View>
  <Text white center>
    Hello World
  </Text>
</View>;
```

### Out of the box styles

Several common styles are provided out of the box

```javascript
import { flexStyles } from 'react-native-enhanced-components'
import { TouchableOpacity, Text } from 'react-native'

<TouchableOpacity style={[flexStyles.flex, flexStyles.row]}>
	<Text>Hey Hello</Text>
</TouchableOpacity>
```

### See all out of the box styles

[See all out of the box styles](https://github.com/jlemm45/react-native-enhanced-components/tree/master/src/styles)
