(window.webpackJsonp = window.webpackJsonp || []).push([
  [3],
  {
    './src/components/Block.js': function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o = n('./node_modules/react-native-web/dist/index.js'),
        r = i(n('./src/helpers/withStyles.js')),
        l = i(n('./src/helpers/withSpacing.js')),
        u = i(n('./src/styles/flex.js'));
      function i(e) {
        return e && e.__esModule ? e : { default: e };
      }
      var a = (0, r.default)((0, l.default)(o.View), u.default);
      t.default = a;
    },
    './src/helpers/withStyles.js': function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = function(e, t) {
          return (function(n) {
            function o() {
              return (
                (function(e, t) {
                  if (!(e instanceof t))
                    throw new TypeError('Cannot call a class as a function');
                })(this, o),
                (function(e, t) {
                  if (t && ('object' === u(t) || 'function' === typeof t))
                    return t;
                  return (function(e) {
                    if (void 0 === e)
                      throw new ReferenceError(
                        "this hasn't been initialised - super() hasn't been called"
                      );
                    return e;
                  })(e);
                })(this, s(o).apply(this, arguments))
              );
            }
            return (
              (function(e, t) {
                if ('function' !== typeof t && null !== t)
                  throw new TypeError(
                    'Super expression must either be null or a function'
                  );
                (e.prototype = Object.create(t && t.prototype, {
                  constructor: { value: e, writable: !0, configurable: !0 },
                })),
                  t && A(e, t);
              })(o, n),
              (function(e, t, n) {
                t && c(e.prototype, t);
                n && c(e, n);
              })(o, [
                {
                  key: 'render',
                  value: function() {
                    return r.default.createElement(
                      e,
                      a({}, this.props, { style: this.styles })
                    );
                  },
                },
                {
                  key: 'styles',
                  get: function() {
                    var e = this.props,
                      n = (0, l.get)(e, 'style', {}),
                      o = d((0, l.pick)(e, Object.keys(t)), t),
                      r = Array.isArray(n) ? n : [n];
                    return i(o).concat(i(r));
                  },
                },
              ]),
              o
            );
          })(r.default.Component);
        });
      var o,
        r =
          (o = n('./node_modules/react/index.js')) && o.__esModule
            ? o
            : { default: o },
        l = n('./node_modules/lodash/lodash.js');
      function u(e) {
        return (u =
          'function' === typeof Symbol &&
          'symbol' ===
            typeof ('function' === typeof Symbol
              ? Symbol.iterator
              : '@@iterator')
            ? function(e) {
                return typeof e;
              }
            : function(e) {
                return e &&
                  'function' === typeof Symbol &&
                  e.constructor === Symbol &&
                  e !==
                    ('function' === typeof Symbol
                      ? Symbol.prototype
                      : '@@prototype')
                  ? 'symbol'
                  : typeof e;
              })(e);
      }
      function i(e) {
        return (
          (function(e) {
            if (Array.isArray(e)) {
              for (var t = 0, n = new Array(e.length); t < e.length; t++)
                n[t] = e[t];
              return n;
            }
          })(e) ||
          (function(e) {
            if (
              ('function' === typeof Symbol ? Symbol.iterator : '@@iterator') in
                Object(e) ||
              '[object Arguments]' === Object.prototype.toString.call(e)
            )
              return Array.from(e);
          })(e) ||
          (function() {
            throw new TypeError(
              'Invalid attempt to spread non-iterable instance'
            );
          })()
        );
      }
      function a() {
        return (a =
          Object.assign ||
          function(e) {
            for (var t = 1; t < arguments.length; t++) {
              var n = arguments[t];
              for (var o in n)
                Object.prototype.hasOwnProperty.call(n, o) && (e[o] = n[o]);
            }
            return e;
          }).apply(this, arguments);
      }
      function c(e, t) {
        for (var n = 0; n < t.length; n++) {
          var o = t[n];
          (o.enumerable = o.enumerable || !1),
            (o.configurable = !0),
            'value' in o && (o.writable = !0),
            Object.defineProperty(e, o.key, o);
        }
      }
      function s(e) {
        return (s = Object.setPrototypeOf
          ? Object.getPrototypeOf
          : function(e) {
              return e.__proto__ || Object.getPrototypeOf(e);
            })(e);
      }
      function A(e, t) {
        return (A =
          Object.setPrototypeOf ||
          function(e, t) {
            return (e.__proto__ = t), e;
          })(e, t);
      }
      var d = function(e, t) {
        return Object.keys(e).map(function(e) {
          return t[e];
        });
      };
    },
    './src/helpers/withStyles.mdx': function(e, t, n) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o = s(n('./node_modules/react/index.js')),
        r = n('./node_modules/@mdx-js/tag/dist/index.js'),
        l = n('./node_modules/docz/dist/index.m.js'),
        u = n('./node_modules/react-native-web/dist/index.js'),
        i = s(n('./src/helpers/withStyles.js')),
        a = s(n('./src/helpers/withSpacing.js')),
        c = s(n('./src/components/Block.js'));
      function s(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function A(e, t) {
        if (null == e) return {};
        var n,
          o,
          r = (function(e, t) {
            if (null == e) return {};
            var n,
              o,
              r = {},
              l = Object.keys(e);
            for (o = 0; o < l.length; o++)
              (n = l[o]), t.indexOf(n) >= 0 || (r[n] = e[n]);
            return r;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var l = Object.getOwnPropertySymbols(e);
          for (o = 0; o < l.length; o++)
            (n = l[o]),
              t.indexOf(n) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, n) &&
                  (r[n] = e[n]));
        }
        return r;
      }
      t.default = function(e) {
        var t = e.components,
          n = A(e, ['components']);
        return o.default.createElement(
          r.MDXTag,
          { name: 'wrapper', components: t },
          o.default.createElement(
            r.MDXTag,
            { name: 'h1', components: t, props: { id: 'with-styles-hoc' } },
            'With Styles HOC'
          ),
          o.default.createElement(
            r.MDXTag,
            { name: 'h2', components: t, props: { id: 'minimel-example' } },
            'Minimel Example'
          ),
          o.default.createElement(
            r.MDXTag,
            { name: 'p', components: t },
            'Creating a button that exposes as many style props as you would like that can be reused with ease throughout your app.'
          ),
          o.default.createElement(
            l.Playground,
            {
              __codesandbox:
                'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmAKw2nIPwPFgXUZklF5EiWSxsAIJYADUIBgMZ5DdE0FXNC1UGiNgYEDAV7SmIs8GcAhEmxYi5XaT04AEchJE2KA4TgSQGKYlj4BoqDCzxZwUPIAo2I9SQuJ4viBKEqSZIKcS6PYO8oFOXZjXYzjuMBJ1qH0QTdP0rSNXYEMpXk0ilVVINUF0VFjlOAAvETWO4dhgHWKIBGeVArnaAAGdhUxmLB2kPOsUJ7ApwoAFli9gADZYvi9YwFAgAxH1oEScL-GcQ5EUdTB2AABSEfgliIahKDgGTqISix8poZwIC8y52AARlShL5Bcsx3KmABBOZ2H86MYPg6B0Ejdh5E5OaxHYWM63jDhUVE7hgGPHzmOxeRd3rYAlqgFbggAMnu8ZEnmShmhuu7zG4b75TAUI3L7VB2nYAB-DZlsjaMNquD7I3kON91kMxPzMWFbMwMAwigKYoc27a4xmtc6wsXHuC2wLifrSb2A8cIIlQXz4DmgL13rUcogiK4KbZnmaclbYUiEf70EcPTK3YXheHaCIOcoSXcsptmlFZ-sZj6ckBu53n6w8fnBbaDBReFK55bVgQNflzrteVxX60FmBSpZ222d1nZ9eFo3xfl-3EktlWLBt7XpwNzB0C5_2deFWdRW7CA8iuQaIqt3nA55-Hbep_VEnsPIZbvOmWX84SNPnaNhLO-Bozwgillpm5qEZuBOU_XmugIPpzB2oPGCsnYjVgHwhDGdRc4gMBEjvCcRiCVBLu7rOc9RSJ8_r8wZeiMchajHIZiOxOiIO2Ajpg3F0AmK4ACYIqi-QLojtnGEwrApkPmBj5LMWTalkYbFoS3xiwlNKAEAUhhQllLREegBDyzWhdLOOkC6oCkE_Agc9tZSAXrnZeiC0G80YJgpeRAV700HOrWAwdhYFl3sAfe7BX7v1PufdgV8b532djzR-WE6EV3flQT-4D2g_xeEyKWSxaDPyASAsB8tIG0GgVLWBYh4HEOoMgrCuCOGSAIXnHB98GzaOwavVIXRkjUNofQ4AJ8uBMJYYovRyYUHcMOpYj-xsBFCL_qIgBEjgGgK_u0WRYIFG3yUckFRSDJAoI0Q_LR2csFEN0ewqQvdtgaJbvWdOe5Ca1k5L-EASleJLlUuXUScAgJkB0KBfQDBaK2XstKd0Tl3wuVqQ6GCMxYjbCWBeNajk9LoH8HgQME1qAeSiDMRmzNoxDkoHcJYr8m5411B4dQWwCA4G2A7OA0zhxNxwOM6MmzkhkycdiAA2kcgAut-cELosDaQxljaU_0pQDHMCU7E0YADqmQ5jZE3OZGg8yK6LK1hYNuHcehQH8HYLCdB0B2HqTgAF2ZoIRx6Qs3GYKg4llQB5dpuzen-QmLYca7C2aPHHAcCYGRTnwHsbijyIhNgCEbszC8OzZlwCWO0V-8UArrTJTiqmoypiC1cB4QI6A2X-XGYzLuwqeYdJ2JyuZ7BlmrKlBsrZ0YFnN2ToqiwCyGU3Ncoayl4qPB7BpUcY15KRV4upSy5mU0BCZESDgWwrr3XRmZRkRu6TDUWDBn61lIKGVsyuGc0NjdLlCsVZS08IUkQJAZRCgQ5gzk4GzZaqVjcljZpwKGuNEd04RxnDGDa2Kg7pvMIwH5sx5gizMqigKhaSVlJmXcA-PDgAdpwAsoiO4XJB0yRkly6c8kFJUhkQSxdULznKdoXQYEDAQVaZqc0jkzTOTtLZdpnTukTl6YZeU_TBk2QdG1BdKQlgwQANKXgAJrOBPY07NikQWKRLikYZdyHkwExqEbGRoXmA0khMaSN7owov0FW9YtaoUwphM_eFiKtTIpba6bFGKQVYpVtTAlXKiUElJbc3mFrj2v0HMOOlcACOirpfVWZ7KJyqu5fKPld7BXkZ5pRl-P6aPEcqOwcZo4hNwnYKweIjJ6MZ0Y7m7IMr1UrLWdqxI2zlXbHY0sR9L7m77NmAq3mRy8bXtkvOM5xQAAkwAjnyFs12uAFyHaXPkMUS5KtTUqwtZkK1oa6MMcdda51_lvWuA9V6t1EXdUV2YzMDaYNX7xfYFG5Lw4S1mr45IUTGQ0ghFTbbRDWac1-bzSCgt2bi0joybx8F8LK1O1bhOSFjBYM5mAO2wkOAnM9ucf2wd7Bh3rjHWNMwk6lD5JMp8LcNBLJ6R2EukCehwKQW0jBauYx_B2QAHKbbfSRHdloKIxFYNRFpEkPlM1PRxT0M6BBzqkiCy99F1I3sch--7j3IM_pe_3bAH3OJfrAAPP9aMHSPOA69yDeH50WZSNGUUe38IjE5EsEH2BTVTpMgs79N6luVJW2uwnTKVnM2AGN1y4OpjUz06-_yZz2g2h5TMflTP3w8qIAINnRAPA86gGzmYHP5RDkF3zlnAvMtmHykcaMsBJzMwisqTgDZ_KJyVyrgA1Gr-DlNKArKs0QWzEB3OXPJxHYKoUrgQANZTtm-v1CG4IMb035v2GW7QJYWZ1vbc1YsA7w3HgXcebd0HD3qA7wiBlj7kbfu9gG-KCQYPZv_LVvrOHgAMoBggMfKZ2_rAHxPAhk-h-1uH0UIDCC56VnHwvMwS-p4jklFg85q_jvXHX53wATch8b-w5vBQvczDbwHWvCeZhB-767vvQcB_zkj_XIgI-1pj8d8UckDemvaznykLPYAc-cF9x38fxep-9637zHfFeUhV8P7H8btzqfHEA08-P6gXLY54rjjHGhgKE9XQwE_pDiBlrEPOHJTD_tqBAF0K8tQOFEPArAHFbHwqEEQGAtipAdAWsm8uFCgWgYgWtFbD_uAWzMQUNFbKnCML8iQfWD_g2sPvKFQbMAQanIEuLNivEFIq2DAEQPcPKGwQQRYCPKiGPNnFUjQLgfoBkCwVbKiK4CKDQRYJwaAtwbweFD_haHISKIIewMITEOPI4ETuoQPJoQQPIRzusKnPCooQVlwbQGob9CYfCjoXoaIYYausYdgBaM4RQVbK4QYVIeweuP4WIUYfwYETIesCEZPAQNPHQDYSEe4foOFOZjABaIELETPJEXWMoagJeBgDYbkaoXwe0BoT4ZYVbLkfYIEYUb4qgMUZIVAtkUoXUUxOYbUXYTwSURoVoRYXWKnLkc4EuGAG0QoRfrYaAkMVAGAJ4VgKYeYc0RMQzMMfkWHOMYMcMbMd4RgIsRsdMdUVAh0ZMZseEU0b4eNh_pNjJNsK4GkEBNQBUiutUhBFrPwBRKePwCbJUuUCCN4BkN4VgD6BbCAFbPwGdg9m8p8RLCABFDgLCRFI1OsPwOUOQP0ELpCUgNCVNHQrROQv-BrM_uSJQIkAWHkHJEdhaECMSFUH8dAiCUiSAFEGgFCfwKoNgEBIiXWMiTAPMFGG5PhPRpidivwEdiySAINJlDgKmDgINJyWzCKVqORJRGdmKbCQAKySkIn0mUz8DnpwB4BikAB6qUMpAA7DKVqQagqWRNaGKRKVKTKfwJYeNlOr8bgLoJACkPcagI8eIcToFCAPYeSFkJ8fwKiRKLQBaBSY2vwPIAoLfEAA',
              __position: 0,
              __code:
                "() => {\n  const buttonStyles = {\n    tomato: {\n      backgroundColor: 'tomato',\n    },\n    purple: {\n      backgroundColor: 'purple',\n    },\n    grey: {\n      backgroundColor: 'grey',\n    },\n    rounded: {\n      borderRadius: 10,\n    },\n  }\n  const MyCustomButton = withSpacing(withStyles(View, buttonStyles))\n  return (\n    <Block flex row justifyBetween>\n      <MyCustomButton tomato rounded p={10} style={{ width: 200 }}>\n        <Text style={{ color: 'white', textAlign: 'center' }}>My Button</Text>\n      </MyCustomButton>\n      <MyCustomButton purple rounded p={10} style={{ width: 200 }}>\n        <Text style={{ color: 'white', textAlign: 'center' }}>My Button</Text>\n      </MyCustomButton>\n      <MyCustomButton grey p={10} style={{ width: 200 }}>\n        <Text style={{ color: 'white', textAlign: 'center' }}>My Button</Text>\n      </MyCustomButton>\n    </Block>\n  )\n}",
              __scope: {
                props: n,
                TouchableOpacity: u.TouchableOpacity,
                Text: u.Text,
                View: u.View,
                withStyles: i.default,
                withSpacing: a.default,
                Block: c.default,
              },
            },
            function() {
              var e = (0, a.default)(
                (0, i.default)(u.View, {
                  tomato: { backgroundColor: 'tomato' },
                  purple: { backgroundColor: 'purple' },
                  grey: { backgroundColor: 'grey' },
                  rounded: { borderRadius: 10 },
                })
              );
              return o.default.createElement(
                c.default,
                { flex: !0, row: !0, justifyBetween: !0 },
                o.default.createElement(
                  e,
                  { tomato: !0, rounded: !0, p: 10, style: { width: 200 } },
                  o.default.createElement(
                    u.Text,
                    { style: { color: 'white', textAlign: 'center' } },
                    'My Button'
                  )
                ),
                o.default.createElement(
                  e,
                  { purple: !0, rounded: !0, p: 10, style: { width: 200 } },
                  o.default.createElement(
                    u.Text,
                    { style: { color: 'white', textAlign: 'center' } },
                    'My Button'
                  )
                ),
                o.default.createElement(
                  e,
                  { grey: !0, p: 10, style: { width: 200 } },
                  o.default.createElement(
                    u.Text,
                    { style: { color: 'white', textAlign: 'center' } },
                    'My Button'
                  )
                )
              );
            }
          )
        );
      };
    },
    './src/styles/flex.js': function(e, t) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      t.default = {
        row: { flexDirection: 'row' },
        column: { flexDirection: 'column' },
        flex: { flex: 1 },
        wrap: { flexWrap: 'wrap' },
        center: { alignItems: 'center', justifyContent: 'center' },
        start: { alignItems: 'flex-start', justifyContent: 'flex-start' },
        end: { alignItems: 'flex-end', justifyContent: 'flex-end' },
        justifyCenter: { justifyContent: 'center' },
        justifyBetween: { justifyContent: 'space-between' },
        alignEnd: { alignItems: 'flex-end' },
        alignCenter: { alignItems: 'center' },
        alignStart: { alignItems: 'flex-start' },
        alignSelfStart: { alignSelf: 'flex-start' },
        alignSelfEnd: { alignSelf: 'flex-end' },
        alignSelfCenter: { alignSelf: 'center' },
      };
    },
  },
]);
