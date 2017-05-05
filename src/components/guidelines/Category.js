import React, { Component } from 'react';
import Guideline from './Guideline.js';
import { connect } from 'react-redux';
import {fetchGuidelines} from '../../actions.js'
import {getGuidelinesForCategory} from '../../dataRetriever.js'

import '../../css/Category.css';

class Category extends Component {

  render() {
    const {guidelines, isFetching, selectedCategory} = this.props

    return (
      <div className="Category-div">
        <h1 className="Category-title">
          {selectedCategory}
        </h1>
        <p className="Category-text"> introductory text to problems here. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam suscipit bibendum mauris eget pharetra. Praesent eget volutpat metus. Vivamus fermentum velit vel metus eleifend laoreet. Aenean non convallis libero. Etiam augue mi, dictum at erat et, commodo aliquam justo. Cras quis venenatis enim. Maecenas pellentesque quam lacus, vitae bibendum tortor porttitor sit amet.</p>
        {isFetching && guidelines.length === 0 &&
          <h2>Loading...</h2>
        }
        {!isFetching && guidelines.length === 0 &&
          <h2>Empty.</h2>
        }
        {guidelines.length > 0 && guidelines.map((guideline, index) =>
          <Guideline
            key={index}
            title={guideline.title}
            text={guideline.text}
            number={guideline.number}
            votes={guideline.votes}
            comments={guideline.comments}
          />)


        }
      </div>
    );
  }

}

function mapStateToProps(state) {
  const { allData } = state

  const {
    isFetching,
    items: data
  } = allData

  var guidelines = []
  var selectedCategory = ""
  if(!isFetching) {
    selectedCategory = state['selectedCategory']['selectedCategory']
    guidelines = getGuidelinesForCategory(data, selectedCategory)


  }

  return {
    guidelines,
    isFetching,
    selectedCategory
  }
}


export default connect(mapStateToProps)(Category)
