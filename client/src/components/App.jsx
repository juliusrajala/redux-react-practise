import React from 'react';
import {List} from 'immutable';
import {data} from '../api/api';

export default React.createClass({
  render(){
    return React.cloneElement(this.props.children, {routes:data});
  }
});
