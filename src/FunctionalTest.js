import React,{useState,setState} from 'react';


// function FunctionalTest(){
//     const [count,setCount]=useState(0);
//     return (
//         <div>
//             <p> Count: {count}</p>
//          <button onClick={()=>setCount(count+1)}>Click</button>
//         </div>
//     );
// }



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

class FunctionalTest extends React.Component {
    state={
        count:0
    }

    render(){
        return(
            <div>
               <p> Count: {this.state.count}</p> 
               <button onClick={()=>setState({count:this.state.count+1})}>Click</button>
            </div>
        );
        }
}
//setState should be imported

export default FunctionalTest;