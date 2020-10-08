import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import FunctionalTest from './FunctionalTest';
import {BrowserRouter,Link,Switch,Route} from 'react-router-dom';
import Lists from './Lists'

// function component

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p> Hello World
//           {/* Edit <code>src/App.js</code> and save to reload. */}
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//class component
class App extends React.Component{
  render(){

    return (
      <BrowserRouter>
    <div> 
      <Link to="/login">Login</Link> <br/>
      <Link to="/functional-test">Functional Test</Link> <br />
      <Link to="/lists">Lists</Link>
      <Switch>
        <Route path="/login">
        <Login title="Login page from prop"/>
        </Route>
        <Route path="/functional-test">
          <FunctionalTest /> 
          {/* now it will route to http://localhost:3000/functional-test*/}
        </Route>

        <Route path="/lists">
        <Lists />
        </Route>

      </Switch>
      
    </div>
    </BrowserRouter>
    );
    
  }

}

// we can use class component or functional component
export default App;

//always return the values under render()
//multiple login components can be printed
//data is passed normally using props (parent child data transfer)
//or otherwise we use --redux-third party library for passing data b/w components
//here the parent is always 'App' component (by default),
//if we want to change the parent, change the root, (change App as root) in index.js



//npm i react-router-dom
//router is imported and installed-link,switch,route,BrowserRouter
//link to is like 'a' tag in html
//route path will decide the path to the component (here login and functional-test component)



//lifecyle
//===============================================
//react calls these fns internally
//1.constructor is called first---only for the first time
//2.getDerivedStateFromProps(props,state)-----static fn
//we get props,state parameters from here
//if we need to change the state according to props we can do here in this fn




//3.render()
//now our task is viewed here

//all other fns except constructor called multiple times

//4.componentDidMount()
//after rendering, component loading first takesplace,
//if we need to perform anything else like animations we do here



//we can define the variables in constructor or in state
//when any updates happens, getDerivedStateFromProps() is called
//so using props if we want to make changes we do this 2nd fn

//note:render() fn is only mandatory,,all others are optional

//5.shouldComponentUpdate()
// {
//   return false;
// }
//if false--updation stops, true-update and render() is called


//now again render() is called

//6.getSnapshotBeforeUpdate(prevProps,prevState)
//props,state before update is obtained here

//7.componentDidUpdate()
//called after rendering and all updates

//note after componentDidMount after any kind of updation,
//corresponding fn is called and render() fn is also called
//componentDidMount is called after first render() calls

//finally
//==========
//8.componentWillUnmount(){}
//is called for unmount the component
//this method is called when the component is about to be removed
//from the dom

