import React,{useState,setState,useEffect} from 'react';


function FunctionalTest(props){
    const [count,setCount]=useState(0);
    useEffect( ()=>{
        alert("Mounted");

        return ()=>{
            alert("Unmount")
        }
    },[props.title]);
    return (
        <div>
            <p> Count: {count}</p>
         <button onClick={()=>setCount(count+1)}>Click</button>
        </div>
    );  
}
//useEffect is to get the lifecycle methods in functional comp
//componentDidMount(),componentDidUpdate() can be used using a hook 'useEffect()' method
//
//using props we get the title of functional test
//now only when the props.title (which is the 2nd comp of useEffect) changes, the effect will run and dispaly 'mount'
//for the first time title changes when the page is loaded, so the 'mounted' will be displayed

//functional component has no state component (stateless) instead we use 'useState'
//import the useState
//import FunctionalTest in App.js and define the <FunctionalTest> to get this component

//useState is a hook in react
//hook is a function in react
//Functional components use 'React hooks' to handle 'state'.
//It uses the useState hook to set state of a variable inside the component:
//useState is a hook used in functional component
//hook is used to hook to the features in react
//hook is fn/method
//class based component use 'state' whereas  useState is the hook like state in class component used in fn comp
//now the state can be used in functional component after using useState hook


//the above functional component can be changed to class component

// class FunctionalTest extends React.Component {
//     state={
//         count:0
//     }

//     render(){
//         return(
//             <div>
//                <p> Count: {this.state.count}</p> 
//                <button onClick={()=>setState({count:this.state.count+1})}>Click</button>
//             </div>
//         );
//         }
// }
//setState should be imported

export default FunctionalTest;



//virtual DOM
//DOM-model created by the browser (like a representation) consists of objects
//virtual DOM-js objects, VDOM creats a copy of the object
//if any changes made in the react will effect in the virtual dom , and full virtual DOM is re-rendered
// and compare with the real DOM
//so only changes from the virtual DOM  gets updated in the real DOM
//performance is based on the rendering, since the rendering happens only for
//the components that are changed in the real DOM,performance gets improved

//architectural pattern for react
//=====================================
//flux- parent to child unidirectional data transfer is flux
//props comes under flux,props is similar to flux
//state is mutable, state can be changed
//we have done flux method here



//redux-popular library used in react
//it is a predectable state container
//entire application has only one 'state' (state tree) for all the components
//so it is called 'single source of truth'
//reducers are used to change the 'state'
//state is a read only, we can't change the state, so we use reducers
//here state is immutable, we can't change state unless we use reducers
//using a library 'store' we define 'state' in the redux
//advantage:'state' storage is easy
//site:redux.js.org/introduction/core-concepts

//React.createElement--used to write code without jsx
//eg: React.createElement('p',{},'This is a text');
//the above is similar to wriiten below
//<p>This is a text </p>
//in build step actually <p>This is a text </p> this is changed to React.createElement('p',{},'This is a text'); and runs
