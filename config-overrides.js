const path = require('path');
const {fromJS, mergeDeep} = require('immutable');
const rewireLess = require('react-app-rewire-less');
const {injectBabelPlugin} = require('react-app-rewired');

function resolve(dir) {
  return path.join(__dirname, '.', dir)
}

module.exports = function override(config, env) {
  console.log("qqqqqq", resolve('src'));
  config.resolve.alias = {
    '@': resolve('src')
  };
  let loaderList = config.module.rules[1].oneOf;
  const jsLoader = fromJS(loaderList[1]).mergeDeep(
    {
      options: {
        babelrc: true,
      },
    },
  ).toJS();
  loaderList.splice(1, 1, jsLoader);
  config = injectBabelPlugin(['import', {libraryName: 'antd', style: 'css'}], config);
  config = rewireLess(config, env);
  return config;
}