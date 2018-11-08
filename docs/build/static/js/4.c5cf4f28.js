(window.webpackJsonp = window.webpackJsonp || []).push([
  [4],
  {
    './docs/Welcome.mdx': function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o,
        a =
          (o = n('./node_modules/react/index.js')) && o.__esModule
            ? o
            : { default: o },
        l = n('./node_modules/@mdx-js/tag/dist/index.js');
      function s(e, t) {
        if (null == e) return {};
        var n,
          o,
          a = (function(e, t) {
            if (null == e) return {};
            var n,
              o,
              a = {},
              l = Object.keys(e);
            for (o = 0; o < l.length; o++)
              (n = l[o]), t.indexOf(n) >= 0 || (a[n] = e[n]);
            return a;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (o = 0; o < l.length; o++)
            (n = l[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (a[n] = e[n]));
        }
        return a;
      }
      t.default = function(e) {
        var t = e.components;
        s(e, ['components']);
        return a.default.createElement(
          l.MDXTag,
          { name: 'wrapper', components: t },
          a.default.createElement(
            l.MDXTag,
            { name: 'h1', components: t, props: { id: 'welcome' } },
            'Welcome'
          ),
          a.default.createElement(
            l.MDXTag,
            { name: 'p', components: t },
            'This library aims to alleviate some of the styling problems involved with React-Native. It makes it easy to wrap common\ncomponents and expose props that can be used to apply common styles with ease.'
          ),
          a.default.createElement(
            l.MDXTag,
            { name: 'h2', components: t, props: { id: 'the-problem' } },
            'The Problem'
          ),
          a.default.createElement(
            l.MDXTag,
            { name: 'p', components: t },
            'React-native does not provide an easy way to apply global styles throughout your application. Say we have a button\nthat we are using throughout our app. We may set it up like this.'
          ),
          a.default.createElement(
            l.MDXTag,
            { name: 'pre', components: t },
            a.default.createElement(
              l.MDXTag,
              {
                name: 'code',
                components: t,
                parentName: 'pre',
                props: { metaString: null },
              },
              "const styles = StyleSheet.create({\n  button: {\n    height: 100,\n    width: 50,\n    borderRadius: 20,\n    backgroundColor: 'red'\n  }\n})\n\n<TouchableOpacity style={styles.button}>\n  <Text>Button</Text>\n</TouchableOpacity>\n"
            )
          ),
          a.default.createElement(
            l.MDXTag,
            { name: 'p', components: t },
            'Now of course we could push this stylesheet into a more global stylesheet that is imported throughout the app.\nThis is ok but starts to look dirty when we are adding multiple styles to make up the button.'
          ),
          a.default.createElement(
            l.MDXTag,
            { name: 'pre', components: t },
            a.default.createElement(
              l.MDXTag,
              {
                name: 'code',
                components: t,
                parentName: 'pre',
                props: { metaString: null },
              },
              "// styles.js\nconst styles = StyleSheet.create({\n  button: {\n    height: 100,\n    width: 50\n  },\n  red: {\n    backgroundColor: 'red'\n  },\n  rounded: {\n    borderRadius: 20\n  }\n})\n\nexport default styles;\n\n// component.js\n<TouchableOpacity style={[styles.button, styles.red, styles.rounded]}>\n  <Text>Button</Text>\n</TouchableOpacity>\n"
            )
          ),
          a.default.createElement(
            l.MDXTag,
            { name: 'h2', components: t, props: { id: 'working-solution' } },
            'Working Solution'
          ),
          a.default.createElement(
            l.MDXTag,
            { name: 'p', components: t },
            'Using the With Styles HOC we can combine all the possible button styles into a component.'
          ),
          a.default.createElement(
            l.MDXTag,
            { name: 'pre', components: t },
            a.default.createElement(
              l.MDXTag,
              {
                name: 'code',
                components: t,
                parentName: 'pre',
                props: { metaString: null },
              },
              "// styles.js\nconst styles = StyleSheet.create({\n  button: {\n    height: 100,\n    width: 50\n  },\n  red: {\n    backgroundColor: 'red'\n  },\n  rounded: {\n    borderRadius: 20\n  }\n})\n\n// button.js\nexport default withStyles(TouchableOpacity, styles);\n\n// component.js\n<MyButton red rounded button>\n  <Text>Button</Text>\n</MyButton>\n"
            )
          ),
          a.default.createElement(
            l.MDXTag,
            { name: 'p', components: t },
            'Using the With Spacing HOC we can add typical spacing utility props to a component.'
          ),
          a.default.createElement(
            l.MDXTag,
            { name: 'pre', components: t },
            a.default.createElement(
              l.MDXTag,
              {
                name: 'code',
                components: t,
                parentName: 'pre',
                props: { metaString: null },
              },
              '// button.js\nexport default withSpacing(TouchableOpacity);\n\n// component.js\n<MyButton mt={3} mb={3} p={20}>\n  <Text>Button</Text>\n</MyButton>\n'
            )
          )
        );
      };
    },
  },
]);
