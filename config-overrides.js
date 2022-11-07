const { override, useBabelRc, disableEsLint } = require('customize-cra')

module.exports = override(
  // eslint-disable-next-line react-hooks/rules-of-hooks
  useBabelRc(),

  // disable eslint in webpack
  disableEsLint()
)
