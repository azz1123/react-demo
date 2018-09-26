module.exports= {
  path: 'hello',
  getComponents(location, cb) {
    require.ensure([],  (require)=> {
      cb(null, require('./Hello'))
    })
  }
}