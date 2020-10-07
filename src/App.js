import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import FunctionalTest from './FunctionalTest';


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

    return <div> 
      <FunctionalTest></FunctionalTest>
      <Login title="login from prop"/> 
    </div>
    
  }

}

// we can use class component or function component
export default App;

//always return the values under render()
//multiple login component can be printed
//data is passed normally using props (parent child data transfer)
//redex-third party library for passing data b/w components
//here the parent is always 'App' component (by default),
//if we want to change the parent, change the root, (change App as root) in index.js
