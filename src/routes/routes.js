export default {
  onEnter: () => {
    console.log('////////')
  },
  path: '/',
  indexRoute: require("./Home/App"),
  getComponent(nextState, cb) {
    require.ensure([], require => {
      cb(null, require("./Home/App"));
    });
  },
  getChildRoutes(location, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require("./ManagePage")
      ])
    })
  }
  // childRoutes: [
  //   require("./ManagePage"),
  // ]
}