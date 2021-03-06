import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setSelectedPage} from '../actions.js';

import '../css/MenuButton.css';

import {normalLabelStyle} from '../styles.js';

class MenuButton extends Component {
  constructor(props) {
    super(props);
    this.setPage = this.setPage.bind(this)
  }

  setPage() {
    const { dispatch } = this.props
    dispatch(setSelectedPage(this.props.title))
  }

  render() {
    var activeLine = "";
    if (this.props.title === this.props.selectedPage) {
      activeLine = <hr className="ActiveLine"/>
    }

    return (
        <div className="Page-button" onTouchTap={this.setPage}>



          <div className="Button">
            <p className="Button-title"> {this.props.title} </p>
          </div>

          <div className="Active-line-div">
            {activeLine}
          </div>

        </div>
    );
  }

}

function mapStateToProps(state) {

  const selectedPage = state['selectedPage']['selectedPage']

  return {
    selectedPage
  }
}

export default connect(mapStateToProps)(MenuButton)
