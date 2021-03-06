import React, { Component } from 'react';
import Category from './Category.js'
import Menu from "./Menu.js";
import '../../css/Guide.css';


class Guide extends Component {

  render() {
    return (
      <div className="Guide-body">

        <div className="menu">
          <Menu />
        </div>

        <div className="content">
          <Category />
        </div>

      </div>
    );
  }
}

export default Guide;
