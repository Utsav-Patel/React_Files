import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const user = {firstname: 'Utsav', lastname: 'Patel'};

function formatName(user){
  return user.firstname+" "+user.lastname;
}

const element = <h1> Hello, {formatName(user)}</h1>;

ReactDOM.render(
  element,
  document.getElementById(`root`)
);
