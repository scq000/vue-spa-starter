module.exports = {
  'hello': function (browser) {
    browser
    .url('http://localhost:8081')
      .waitForElementVisible('#app', 15000)
      .assert.containsText('.hello', 'Hello World')
      .end()
  }
}
