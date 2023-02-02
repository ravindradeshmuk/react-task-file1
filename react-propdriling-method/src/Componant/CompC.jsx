import React from 'react';
import { fristName } from '../App';

const CompC = () => {
  return (
  <>
  <fristName.Consumer>
    { (value) => {
    <h1>fristName:{value}</h1>
}}
  </fristName.Consumer>
</>

  );
};

export default CompC