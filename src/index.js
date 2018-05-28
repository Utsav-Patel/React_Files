import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const user = {firstName:'Utsav', LastName:'Patel'};

function formatName(user){
  return user.firstName + " " + user.LastName;
}

function Login(props){
  return <button onClick={props.onClick}>Login</button>;
}

function Logout(props){
  return <button onClick={props.onClick}>Logout</button>;
}

function UserLogin(){
  return <h1>Welcome Back!</h1>;
}

function UserLogout(){
  return <h1>Please Login</h1>;
}

function Greeting(props){
  if(props.isLogin)
    return <UserLogin />;
  else
    return <UserLogout />;
}

class Log extends React.Component{
  constructor(props){
    super(props);
    this.state = {isLogin: false};
    this.handleLogin = this.handleLogin.bind(this);
    this.handleLogout = this.handleLogout.bind(this);
    // this.Login = this.Login.bind(this);
    // this.Logout = this.Logout.bind(this);
    // this.UserLogin = this.UserLogin.bind(this);
    // this.UserLogout = this.UserLogout.bind(this);
    // Greeting = Greeting.bind(this);
  }

  handleLogin(){
    this.setState({isLogin: true});
  }

  handleLogout(){
    this.setState({isLogin: false});
  }

  render(){
    const isLogin = this.state.isLogin;
    var button = null;
    if(isLogin)
      button = <Logout onClick={this.handleLogout} />;
    else
      button = <Login onClick={this.handleLogin} />;
    return (
      <div>
        <Greeting isLogin={isLogin} />
        {button}
      </div>
    );
  }
}

ReactDOM.render(
  <Log />,
  document.getElementById('root')
);
