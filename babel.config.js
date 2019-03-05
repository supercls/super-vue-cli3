module.exports = {
  presets: [
    '@vue/app'
  ],
  "plugins": [
    "@babel/plugin-syntax-dynamic-import",
    [
      "component",
      {
        "libraryName": "mint-ui",
        "style": true
      }
    ]
  ]
}
