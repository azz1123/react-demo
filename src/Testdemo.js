import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {toJS} from 'immutable';

import * as testActions from './js/actions/test1';

class Testdemo extends Component {

  componentDidMount() {
    const {testActions} = this.props;
    testActions.addTodo()
  }

  fileOnChange(e) {
    console.log('e', e,e.target,e.target.files)
  }

  render() {
    const {type, data} = this.props;
    return (
      <div className="Test1">
        {data}
        <form action="">
          <input type="file" accept="image/png, image/gif, image/jpeg" onChange={this.fileOnChange}/>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const {test1: {data}} = state.test1.toJS();
  return {
    data
  }
}

function mapDispatchToProps(dispatch) {
  return {
    testActions: bindActionCreators(testActions, dispatch)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps)(Testdemo)

// export default Testdemo;


