import React from 'react';
import {remove} from "../Actions";
import {connect} from 'react-redux';

const AddedFeature = props => {
  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button className="button" onClick={()=>props.remove(props.feature)}>X</button>
      {props.feature.name}
    </li>
  );
};


export default connect(
  null,
  {remove}
 )(AddedFeature);
