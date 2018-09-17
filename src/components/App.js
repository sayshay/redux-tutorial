import React, { Component } from 'react';
import '../App.css';
import { connect } from 'react-redux';

import { Main } from './Main'
import { User } from './User'
import { setName } from '../actions/userActions'

class App extends Component {
  constructor () {
    super()

    this.changeUsername = this.changeUsername.bind(this)
  }

  changeUsername (name) {

  }

  render() {
    return (
      <div className="App">
        <Main changeUsername={() => this.props.setName('Anna')} />
        <User username={this.props.user.name}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        math: state.mathReducer
    }
}

const mapDispatchtToProps = (dispatch) => {
    return {
       setName: (name) => {
           dispatch(setName(name))
       }
    }
}

export default connect(mapStateToProps, mapDispatchtToProps)(App)
