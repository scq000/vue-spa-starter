module.exports = {
  api: '/api/hello',
  response: function (req, res) {
    res.send(`This msg is from mock sever!`)
  }
}
