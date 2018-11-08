(window.webpackJsonp = window.webpackJsonp || []).push([
  [5],
  {
    './src/helpers/withSpacing.mdx': function(e, t, A) {
      Object.defineProperty(t, '__esModule', { value: !0 }),
        (t.default = void 0);
      var o = c(A('./node_modules/react/index.js')),
        n = A('./node_modules/@mdx-js/tag/dist/index.js'),
        i = A('./node_modules/docz/dist/index.m.js'),
        a = A('./node_modules/react-native-web/dist/index.js'),
        l = c(A('./src/helpers/withSpacing.js'));
      function c(e) {
        return e && e.__esModule ? e : { default: e };
      }
      function r(e, t) {
        if (null == e) return {};
        var A,
          o,
          n = (function(e, t) {
            if (null == e) return {};
            var A,
              o,
              n = {},
              i = Object.keys(e);
            for (o = 0; o < i.length; o++)
              (A = i[o]), t.indexOf(A) >= 0 || (n[A] = e[A]);
            return n;
          })(e, t);
        if (Object.getOwnPropertySymbols) {
          var i = Object.getOwnPropertySymbols(e);
          for (o = 0; o < i.length; o++)
            (A = i[o]),
              t.indexOf(A) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, A) &&
                  (n[A] = e[A]));
        }
        return n;
      }
      t.default = function(e) {
        var t = e.components,
          A = r(e, ['components']);
        return o.default.createElement(
          n.MDXTag,
          { name: 'wrapper', components: t },
          o.default.createElement(
            n.MDXTag,
            { name: 'h1', components: t, props: { id: 'with-spacing-hoc' } },
            'With Spacing HOC'
          ),
          o.default.createElement(
            n.MDXTag,
            { name: 'h2', components: t, props: { id: 'minimel-example' } },
            'Minimel Example'
          ),
          o.default.createElement(
            n.MDXTag,
            { name: 'p', components: t },
            'The With Styles HOC provides a spacing wrapper that can wrap any component and provide spacing utilility props.'
          ),
          o.default.createElement(
            i.Playground,
            {
              __codesandbox:
                'N4IgZglgNgpgziAXKCA7AJjAHgOgBYAuAtlEqAMYD2qBMNSIAPOhAG4AEE6AvADogAnSpQL8AfIwD0LVmJABfADQg0mXACsEyEFRp0CDSQCojvVO3YAVPBDjsAwpUwBlAIYYARpSzs8rux4wdOyuAK4ElESuBBDkrlBQAJ7sAOZ0MALRMOjsoXBoKWYWAAZUmHDu6F5YGcU47ACSYOyJlKEA5AIw7OShAhBtdniUAO7sBH4Evq4ADjPp6IotbT3uRT14MOQA1uxtU20C7OiU5EMZMIi-BAQzcIiSkikQE6EeOFREkqiUrGiJkjK8Eq1QyZnWTWWoXY2Hm_To5G67mScAIAlCKRSsDsIxeeHGNjsFU83iWM1g_m6mVsSPMtjgoRg62oqTxb3qiAAlGYjJIzBAiDNKAIpgAlGCuchTMBCIjsToSqXtADc_MFwrFioIABEAPIAWXYMsi8q6koIAFoTkQVWqhSKHJEhah9EbZfKcJJsK5BbAcJpbagzOLzXr9TguhgMgAKdbMNhidYWRh4ADMYkc6pdNE46pF2XYuImPScwJJNQEiCkacT5gs7EYMzE0YaUyiyRdBdc6BYMWo8XYMyEd3GlFSMCmL3Ykcw_VQKULMASnKkTaTDczztdklryekCcUZhOvSI-hwaQIAFFYKeaAAhRINdDRzrCAjtbmoTnKhTKb2-mB_S0ChqFoehEBUPMpmAKw2nIPwPFgXUZklF5EiWSxsCmeQ3RNBVzQtVBojYGBAwFe0piLPBnBQ8gClwuV2k9OABHISRNigOE4EkKiaNQ-cyKg9gQylBjTS1QMzF0VFjlOAAvZwCESbF2G4dhgHWKIBGeVArnaAAGdhUxmLB2kPOsUJ7Ao9IAFhM9gADYTLM9YwFAgAxH1oESPT-GcQ5EUdTB2AABSEfgliIahKDgWjSPMiw3JoZwIDky52AARhs8z5FVINUGkqYAEE5lU9hoxg-DoHQSN2HkTlVLEcq4xkdhUWUmBuGAY8FKU7F5F3etgCqqAauCAAycbxkSeZKGaEaxvMbhlvlMBQgKvtUHadgAH4NmqyNowaq4FsjeQ433WQzE_MxYQ1Y4YDAMIoCmI7GuautGBKtc6wsN7uCajTfvrQr2H1RJ7DyCIiDvcIIiWws8T4uj52jSw4IQpDaLQz963rLoCD6cxY2BvHGHByHUUiWGbhZGYuoAVn0nD2tgLqYI8SVthSIR1vQRwoGFK5eF4dpEMZEXtvkAb1zx5NMKwKZWc64BKsoQXK3YSWRhsWhJaWWhFaKqAIBSXStdFxE9AESW6oG8H2Bp-GpAVghBrlhtJApqHqbh6h3frXH63Oz7JG-2tOV_EAWLYjiuJ4pHsfnICyB0UD9AYcj7pE6V3XwpU8qzh0YJmWJtiWC86rE9pBfQfw8EEii2qTlIlhggBpS8AE1nCr41GJwZi-vgSRYv4lJJJdLAm8wJ7Qheo11qlAZzF4lvo03ah9AaoGLAJomeigfw7Cwuh0DsHOcE37NoPXSvlbgN7d7l0GS-HOwcLUiZbDy2X2EeccSth6DmHG1YecA_6g2VmFSgMwyoXmjEOWBcAljtGVmZdS9Vf6k3_pIQBzdx4gOQSEDA7AohwIiEQuE7BWDxEZBAnBoMeauA8IEdAikOp2DUrqDw6gtgEBwNsGAiRH6lx2Ig9-SxO4905JyHA5CSYewsEI5IAMCEoxSAAbWKAAEmACo-QeikF3E0SogAuvIYoZi_7fnBDggBzCPB7AmBkMBnDIHUBkiITYRw1JFQEJkRIOBbD-MCdGaBw4Gp7QibA9gVxNExJmGY7BHsAGnm0kiBIf994CHMJowe55MisOyBw7ESwCneIyMk9cId1wzhjDvbJE4D6MGvq6YABTv5wBwMYuALNh5dS6TgB-OEdx5TxiHCwuUzAhyjjHUe4DR4txTtoXQYEDAQVBpQXhZVgDTPyndB0oNpG9zUpo9oNpUEzAwRc98qCiACBuUQDwTyoA3JmHc-UQ53kvKuW86p-U3JHGjLAScZV9LKk4A2NSGV9IQqhQAahhY04G2z1DaKIHoiAlizG7L_hYLSOkrgQASsHcZ9Y0UYoIFinFeKcEEtcNpNA6MZjEtJVM8lFhKXFGeTSqxdKlFkMZTpO8IhoZspqZyvYvCMVQD5bitSz8PaErQAAGUegQCVwN9l425Q8-VAqlEqtQKKU2hAtUTKldymYBrFX4sHN2Fg84LVkvXNa6lwBsX8rtfSh1Vl5wspdRyt1MrigzA8La9S9rLJOpSKK2mRAg11StaG8kkalVyxjQUdVYBNWcHZcmkN6Kw0CHTdGx1BRTUpHNfmyVMy7GHKmLPZ6BxeF5SjrRbYrg0hAWoKnNZGcILP34ERU8_BhZp3KCCbwGQLT_nJEyEApL-CsAyPkag46tYgH0jgHd-kIrrH4OUcg_QPkr03fwIqbVyKwBhFgH0C6HrkkoIkAseR6JmilBaIExIqgzptkuw9IAohoAvSoKMGgIGAbrEemA8wowFQgPATdGb-CftEEgLdGUHI4FTDgDKB7gZoa1IRYiq6wM7oZjh_d0G8b8FrvXMDAA9Gy-GADs-GaMFuIwRa0YHsO4fw_wdYId5BzOnbgXQkAUi9tQP29O4EQAaRALQX0WRx38BPRKWgFp0MWlmDMfgYnpbyCAA',
              __position: 0,
              __code:
                "() => {\n  const MyCustomButton = withSpacing(TouchableOpacity)\n  return (\n    <MyCustomButton p={50} style={{ backgroundColor: 'blue' }}>\n      <Text style={{ color: 'white', textAlign: 'center' }}>My Button</Text>\n    </MyCustomButton>\n  )\n}",
              __scope: {
                props: A,
                TouchableOpacity: a.TouchableOpacity,
                Text: a.Text,
                withSpacing: l.default,
              },
            },
            function() {
              var e = (0, l.default)(a.TouchableOpacity);
              return o.default.createElement(
                e,
                { p: 50, style: { backgroundColor: 'blue' } },
                o.default.createElement(
                  a.Text,
                  { style: { color: 'white', textAlign: 'center' } },
                  'My Button'
                )
              );
            }
          )
        );
      };
    },
  },
]);
