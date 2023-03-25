import React from 'react';
import PropTypes from 'prop-types';
import { Component } from 'react';


class Section extends Component {
  static defaultProps = {
      title: ''
  }
  static propTypes = {
      title: PropTypes.string
  }

  render () {

      const { title, children } = this.props;

      return (
           <>
            <h1>{title}</h1>
            {children}
           </>
      )
 }
}

export default Section;