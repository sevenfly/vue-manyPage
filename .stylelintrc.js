module.exports = {
  root: true,
  extends: [
    'stylelint-config-standard',
    'stylelint-config-html/vue',
    'stylelint-config-standard-scss',
    'stylelint-config-recommended-vue/scss',
    'stylelint-config-recess-order',
    'stylelint-config-prettier'
  ],
  rules: {
    'rule-empty-line-before': 'off',
    'order/properties-order': 'off',
    'alpha-value-notation': 'off',
    'color-function-notation': 'off',
    'font-family-no-missing-generic-family-keyword': 'off',
    'length-zero-no-unit': 'off',
    'no-descending-specificity': 'off',
    'property-no-vendor-prefix': 'off',
    'selector-pseudo-element-colon-notation': 'off',
    'declaration-empty-line-before': 'off'
  }
}
