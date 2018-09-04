# React-Native Enhanced Components

Tired of adding the same basic styling to components over and over? React-native-enhanced-components wraps the `View` component out of the box with basic styles as well as exposes a `withStyles` helper function that can wrap any component you choose. Also a a stylesheet is exposed as styles with basic styles that can be applied in the case you do not want to wrap the component.

## Getting Started
`yarn add react-native-enhanced-components` or `npm i react-native-enhanced-components`

### Basic Example
Adding a margin top and overall padding of 5 to a view. The view component includes all flex styling below.

````

import { View } from 'react-native-enhanced-components'
import { Text } from 'react-native'

<View mt={5} p={5}>
	<Text>Hello World</Text>
</View>

````

### Wrap your own component
Wrapping the text component with some basic styling.
````

import { withStyles } from 'react-native-enhanced-components`
import { Text as RNText, StyleSheet } from 'react-native'

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
}

const Text = withStyles(RNText, Object.keys(textStyles), false, textStyles);

<View>
	<Text white center>Hello World</Text>
</View>
````

### Using provided styles
Using the provided basic stylesheet in the case you do not want to wrap.
````
import { styles } from 'react-native-enhanced-component'
import { TouchableOpacity, Text } from 'react-native'

<TouchableOpacity style={[styles.flexItem, styles.flexRow]}>
	<Text>Hey Hello</Text>
</TouchableOpacity>
````

### Included Styles
#### Flex
````
{
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  flexItem: {
    flex: 1,
  },
  flexWrap: {
    flexWrap: 'wrap',
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  justifyCenter: {
    justifyContent: 'center',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  flexEnd: {
    alignItems: 'flex-end',
  },
  right: {
    alignItems: 'flex-end',
    justifyContent: 'flex-end',
  },
  alignStart: {
    alignSelf: 'flex-start',
  },
  alignEnd: {
    alignSelf: 'flex-end',
  },
  alignCenter: {
    alignItems: 'center',
  },
};
````
#### Text
````
{
  textCenter: {
    textAlign: 'center',
  },
  textLeft: {
    textAlign: 'center',
  },
  textRight: {
    textAlign: 'right',
  },
};
````
#### Utility
````
{
  overflowHidden: {
    overflow: 'hidden',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  }
}
````