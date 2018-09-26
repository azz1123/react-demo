module.exports= {
  onEnter: () => {
    console.log('main')
  },

  path: 'main',
  components: require("./Home/Home"),
  childRoutes: [
    require("./routes/Hello"),
    require("./routes/List"),
  ]
}