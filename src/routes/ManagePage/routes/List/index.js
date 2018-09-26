module.exports = {
  path: 'list',
  getComponents(location, cb) {
    require.ensure([], (require) => {
      cb(null, require('./List'))
    })
  }
}