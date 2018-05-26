import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const user = {firstname: 'Utsav', lastname: 'Patel'};

function formatName(user){
  return user.firstname+" "+user.lastname;
}

function tick(){
  const element = (
    <div>
      Hello
      <h2>
        {formatName(user)}
      </h2>
      <h3>
        It is {new Date().toLocaleTimeString()}.
      </h3>
    </div>
  );

  ReactDOM.render(
    element,
    document.getElementById(`root`)
  );
}

setInterval(tick,1000);
