import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const user = {firstName:'Utsav', LastName:'Patel'};

function formatName(user){
  return user.firstName + " " + user.LastName;
}

class Clock extends React.Component{
  constructor(props){
    super(props);
    this.state = {date: new Date()};
  }

  tick(){
    this.setState({
      date: new Date()
    });
  }

  componentDidMount(){
    this.timeId = setInterval(() => this.tick(),1000);
  }

  componentWillUnmount(){
    clearInterval(this.timeId);
  }

  render(){
    return (
      <div>
        <h2> Hello {formatName(user)} </h2>
        <h3> It is {this.state.date.toLocaleTimeString()} </h3>
      </div>
    );
  }
}

ReactDOM.render(
  <Clock />,
  document.getElementById('root')
);
