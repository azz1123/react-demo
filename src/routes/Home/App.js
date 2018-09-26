// const React = require('react');
import React from "react";

import {Button} from 'antd';

// import PropTypes from 'prop-types';

import './App.less'

class App extends React.Component {
  constructor(props, context) {
    super(props, context);
  }

  componentDidMount() {

  }

  render() {
    console.log("render-app", this.props)
    return (
      <div className="App">
        {this.props.children}
      </div>
    );
  }
}

module.exports = App;
