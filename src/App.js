import React from 'react';
import './App.css';
import {NavLink, Switch, Route} from 'react-router-dom';


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      firstname: 'An',
      lastname: 'Luong'
    }
  }

  render() {
    return (
      <div className='app'>
        <h1>React Router with Props</h1>
        <Navigation/>
        <Main firstname={this.state.firstname} lastname={this.state.lastname}/>
      </div>  
    )
  }
};

const Navigation = (props) => {
  return (
    <nav>
      <ul>
          <li><NavLink to='/'>Home</NavLink></li>
          <li><NavLink to='/first'>First</NavLink></li>
          <li><NavLink to='/Last'>Last</NavLink></li>
      </ul>
    </nav>
  )
}

const Home = () => (
  <div className='home'>
    <h1>A practice to pass a prop using react router</h1>
  </div>
);

const First = (props) => (
  <div className='firstname'>
    <h1>{props.firstname}</h1>
    <p>This is my first name</p>
    </div>
);

const Last = (props) => (
  <div className='lastname'>
    <h1>{props.lastname}</h1>
    <p>This is my last name</p>
  </div>
);


const Main =(props) => {
  return (
    <Switch>
      <Route exact path='/' component={Home}></Route>
      {/* <Route exact path='/about' component={About}></Route> */}
      <Route exact path='/first' render={()=> {
           return (
             <First firstname={props.firstname} />
            )
          }} />
      <Route exact path='/last'  render={()=> {
           return (
             <Last lastname={props.lastname} />
            )
          }} />
    </Switch>
  )
}

// firstname={props.firstname}

export default App;